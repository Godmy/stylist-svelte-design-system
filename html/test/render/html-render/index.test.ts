import { afterEach, describe, expect, it } from 'vitest';
import { flushSync, hydrate, mount, unmount } from 'svelte';
import { SvelteMap } from 'svelte/reactivity';
import Node from '../../../component/template/node/index.svelte';
import Style from '../../../component/atom/style/index.svelte';
import Script from '../../../component/atom/script/index.svelte';
import Radio from '../../../component/atom/input-radio/index.svelte';
import Body from '../../../component/template/body/index.svelte';
import hydration from '../../../data/json/html-hydration-sample/index.json';
import { HTML_ELEMENT } from '../../../const/record/html-element';
import { HTML_INPUT_TYPE } from '../../../const/array/html-input-type';
import snapshot from '../../../data/json/html-spec-snapshot/index.json';
import { applyHtmlAttributes } from '../../../function/script/html-attributes';
import { serializeHtmlDocument } from '../../../function/serialize/html-document';
import { checkHtmlNode } from '../../../function/check/html-node';
import { resolveHtmlValidation } from '../../../function/resolve/html-validation';
import type { HtmlElementNode } from '../../../type/struct/html-element-node';
import type { HtmlNode } from '../../../type/alias/html-node';
import type { HtmlTag } from '../../../type/alias/html-tag';

describe('HTML coverage and regressions', () => {
	const instances: ReturnType<typeof mount>[] = [];
	const render = (node: HtmlNode) => {
		const target = document.createElement('div');
		document.body.append(target);
		flushSync(() => instances.push(mount(Node, { target, props: { node } })));
		return target;
	};
	const el = (
		tag: HtmlTag,
		children: HtmlNode[] = [],
		attrs: HtmlElementNode['attrs'] = {}
	): HtmlElementNode => ({ kind: 'element', tag, children, attrs });
	const text = (value: string): HtmlNode => ({ kind: 'text', value });
	afterEach(async () => {
		for (const instance of instances.splice(0)) await unmount(instance);
		document.body.innerHTML = '';
	});
	it('matches every independent WHATWG snapshot tag, with individual sources', () => {
		expect(Object.keys(HTML_ELEMENT).sort()).toEqual(Object.keys(snapshot.elements).sort());
		for (const tag of Object.keys(snapshot.elements) as HtmlTag[]) {
			expect(HTML_ELEMENT[tag].source).toBe(snapshot.elements[tag].source);
			expect(HTML_ELEMENT[tag].verification).toMatch(/^(index-verified|partial-model)$/);
		}
	});
	it.each(Object.keys(snapshot.elements) as HtmlTag[])('renders <%s>', (tag) => {
		const target = render(el(tag, [], { 'data-html-coverage': tag }));
		const element =
			tag === 'html'
				? document.documentElement
				: tag === 'body'
					? document.body
					: tag === 'head'
						? document.head
						: target.querySelector(tag);
		expect(element).not.toBeNull();
		expect(element!.getAttribute('data-html-coverage')).toBe(tag);
		if (tag === 'svg') expect(element!.namespaceURI).toBe('http://www.w3.org/2000/svg');
		if (tag === 'math') expect(element!.namespaceURI).toBe('http://www.w3.org/1998/Math/MathML');
	});
	it.each(HTML_INPUT_TYPE)('renders input trait %s', (type) => {
		const target = render(el('input', [], { type }));
		expect(target.querySelector('input')!.getAttribute('type')).toBe(type);
	});
	it('preserves textarea value and raw-text props', () => {
		const target = render(
			el('div', [
				el('textarea', [], { value: 'hello' }),
				el('style', [], { text: 'body { color: red; }' })
			])
		);
		expect(target.querySelector('textarea')!.value).toBe('hello');
		expect(target.querySelector('style')!.textContent).toBe('body { color: red; }');
	});
	it('keeps text children of rp and skips raw text with its closing delimiter', () => {
		const target = render(
			el('div', [
				el('ruby', [
					text('漢'),
					el('rp', [text('(')]),
					el('rt', [text('kan')]),
					el('rp', [text(')')])
				]),
				el('style', [text('a{}</style><b>x</b>')])
			])
		);
		expect([...target.querySelectorAll('rp')].map((rp) => rp.textContent)).toEqual(['(', ')']);
		expect(target.querySelector('style')).toBeNull();
		expect(target.querySelector('b')).toBeNull();
	});
	it('preserves raw-text characters', () => {
		const target = document.createElement('div');
		document.body.append(target);
		const props = { text: '.x::before { content: "&amp;"; }' };
		flushSync(() => instances.push(mount(Style, { target, props })));
		expect(target.querySelector('style')!.textContent).toBe(props.text);
	});
	it('updates raw text and the bound DOM element', () => {
		const target = document.createElement('div');
		document.body.append(target);
		const values = new SvelteMap([['text', 'body { color: red; }']]);
		let bound: HTMLStyleElement | null = null;
		const props = {
			get text() {
				return values.get('text')!;
			},
			get element() {
				return bound;
			},
			set element(value: HTMLStyleElement | null) {
				bound = value;
			}
		};
		flushSync(() => instances.push(mount(Style, { target, props })));
		expect(bound).toBe(target.querySelector('style'));
		flushSync(() => values.set('text', '.x::before { content: "&amp;"; }'));
		expect(target.querySelector('style')!.textContent).toBe(values.get('text'));
		expect(bound).toBe(target.querySelector('style'));
	});
	it.each([
		['style', Style],
		['script', Script]
	] as const)('hydrates %s with exact raw text', (tag, Component) => {
		const fixture = hydration[tag];
		const target = document.createElement('div');
		document.body.append(target);
		target.innerHTML = fixture.html;
		flushSync(() =>
			instances.push(hydrate(Component, { target, props: fixture.props, recover: false }))
		);
		expect(target.querySelector(tag)!.textContent).toBe(fixture.props.text);
	});
	it('distinguishes boolean, enumerated and ARIA attrs and restores previous values', () => {
		const target = document.createElement('div');
		target.setAttribute('class', 'original');
		const undo = applyHtmlAttributes(target, {
			contenteditable: false,
			'aria-hidden': false,
			inert: true,
			class: null
		});
		expect(target.getAttribute('contenteditable')).toBe('false');
		expect(target.getAttribute('aria-hidden')).toBe('false');
		expect(target.hasAttribute('inert')).toBe(true);
		expect(target.hasAttribute('class')).toBe(false);
		undo();
		expect(target.getAttribute('class')).toBe('original');
		expect(target.hasAttribute('inert')).toBe(false);
	});
	it('accepts dl groups and selectedcontent and rejects phrasing/order/empty violations', () => {
		expect(
			checkHtmlNode(el('dl', [el('div', [el('dt', [text('Term')]), el('dd', [text('Value')])])]))
		).toEqual([]);
		expect(
			checkHtmlNode(
				el('select', [el('button', [el('selectedcontent')]), el('option', [text('A')])])
			)
		).toEqual([]);
		for (const tree of [
			el('p', [el('a', [el('div')], { href: '#' })]),
			el('picture', [el('img'), el('source')]),
			el('br', [text(' ')])
		])
			expect(checkHtmlNode(tree).length).toBeGreaterThan(0);
	});
	it.each([
		el('a', [el('span', [el('button')])], { href: '#' }),
		el('header', [el('div', [el('footer')])]),
		el('form', [el('form')]),
		el('picture', [el('img'), el('img')]),
		el('dl', [el('dd', [text('Value')])]),
		el('table', [el('tfoot'), el('tbody')]),
		el('colgroup', [el('col')], { span: 2 }),
		el('video', [el('source')], { src: 'a.mp4' })
	])('reports contextual constraint for $tag', (tree) =>
		expect(checkHtmlNode(tree).length).toBeGreaterThan(0)
	);
	it('never labels a structurally accepted tree as fully verified', () => {
		expect(resolveHtmlValidation(el('div')).status).toBe('unchecked');
		expect(resolveHtmlValidation(el('br', [text('x')])).status).toBe('invalid');
	});
	it('exports full document attributes and exact raw text', () => {
		const tree = el(
			'html',
			[
				el(
					'head',
					[el('title', [text('A & B')]), el('style', [], { text: 'body { color: red; }' })],
					{ 'data-head': 'yes' }
				),
				el('body', [el('textarea', [], { value: 'hello & goodbye' })], {
					class: 'page',
					'aria-hidden': false
				})
			],
			{ lang: 'ru', dir: 'ltr' }
		);
		const html = serializeHtmlDocument(tree);
		expect(html).toContain('<!DOCTYPE html><html lang="ru" dir="ltr">');
		expect(html).toContain('<head data-head="yes">');
		expect(html).toContain('aria-hidden="false"');
		expect(html).toContain('<style>body { color: red; }</style>');
		expect(html).toContain('<textarea>hello &amp; goodbye</textarea>');
	});
	it.each(['checked', 'defaultChecked'])('preserves native radio %s without group', (prop) => {
		const target = render(el('input', [], { type: 'radio', value: 'a', [prop]: true }));
		const native = document.createElement('input');
		native.type = 'radio';
		if (prop === 'checked') native.checked = true;
		else native.defaultChecked = true;
		expect(target.querySelector('input')!.checked).toBe(native.checked);
	});
	it('updates explicit radio checked without replacing the input', () => {
		const target = document.createElement('div');
		document.body.append(target);
		const state = new SvelteMap([['checked', true]]);
		flushSync(() =>
			instances.push(
				mount(Radio, {
					target,
					props: {
						get checked() {
							return state.get('checked');
						}
					}
				})
			)
		);
		const input = target.querySelector('input')!;
		flushSync(() => state.set('checked', false));
		expect(input.checked).toBe(false);
		expect(target.querySelector('input')).toBe(input);
		flushSync(() => state.set('checked', true));
		expect(input.checked).toBe(true);
	});
	it('binds a radio group starting at undefined and updates sibling radios', () => {
		const target = document.createElement('div');
		document.body.append(target);
		const state = new SvelteMap<string, unknown>([['group', undefined]]);
		for (const value of ['a', 'b'])
			flushSync(() =>
				instances.push(
					mount(Radio, {
						target,
						props: {
							name: 'library-group',
							value,
							get group() {
								return state.get('group');
							},
							set group(next) {
								state.set('group', next);
							}
						}
					})
				)
			);
		const [a, b] = target.querySelectorAll('input');
		flushSync(() => a.click());
		expect(state.get('group')).toBe('a');
		expect([a.checked, b.checked]).toEqual([true, false]);
		flushSync(() => state.set('group', 'b'));
		expect([a.checked, b.checked]).toEqual([false, true]);
	});
	it.each(['online', 'resize', 'hashchange'])(
		'reflects body %s to Window and restores cleanup',
		async (type) => {
			const key = `on${type}`;
			const handlers = document.body as unknown as Record<string, unknown>;
			const previous = handlers[key];
			let nativeCalls = 0,
				libraryCalls = 0;
			const nativeContext: { receiver?: Window; target?: EventTarget | null } = {};
			handlers[key] = function (this: Window, event: Event) {
				nativeContext.receiver = this;
				nativeContext.target = event.currentTarget;
				nativeCalls++;
			};
			window.dispatchEvent(new Event(type));
			const original = handlers[key];
			const target = document.createElement('div');
			document.body.append(target);
			let instance: ReturnType<typeof mount> | undefined;
			try {
				flushSync(
					() =>
						(instance = mount(Body, {
							target,
							props: {
								[key]: function (this: Window, event: Event) {
									expect(this === nativeContext.receiver).toBe(true);
									expect(event.currentTarget === nativeContext.target).toBe(true);
									libraryCalls++;
								}
							}
						}))
				);
				window.dispatchEvent(new Event(type));
				expect(nativeCalls).toBe(1);
				expect(libraryCalls).toBe(1);
				await unmount(instance!);
				instance = undefined;
				expect(handlers[key]).toBe(original);
				window.dispatchEvent(new Event(type));
				expect(nativeCalls).toBe(2);
				expect(libraryCalls).toBe(1);
			} finally {
				if (instance) await unmount(instance);
				handlers[key] = previous;
			}
		}
	);
	it('preserves native event return values and restores prior handlers', () => {
		const native = document.createElement('button');
		native.onclick = () => false;
		const library = document.createElement('button');
		const old = () => undefined;
		library.onclick = old;
		const undo = applyHtmlAttributes(library, { onclick: () => false });
		const a = new MouseEvent('click', { cancelable: true });
		const b = new MouseEvent('click', { cancelable: true });
		native.dispatchEvent(a);
		library.dispatchEvent(b);
		expect(b.defaultPrevented).toBe(a.defaultPrevented);
		undo();
		expect(library.onclick).toBe(old);
	});
	it('replaces and clears a body handler on update, then restores the previous handler', async () => {
		const previous = document.body.ononline;
		const target = document.createElement('div');
		document.body.append(target);
		let first = 0,
			second = 0;
		const state = new SvelteMap<string, (() => void) | null>([['handler', () => first++]]);
		let instance: ReturnType<typeof mount> | undefined;
		try {
			flushSync(
				() =>
					(instance = mount(Body, {
						target,
						props: {
							get ononline() {
								return state.get('handler');
							}
						}
					}))
			);
			window.dispatchEvent(new Event('online'));
			flushSync(() => state.set('handler', () => second++));
			window.dispatchEvent(new Event('online'));
			flushSync(() => state.set('handler', null));
			window.dispatchEvent(new Event('online'));
			expect([first, second]).toEqual([1, 1]);
			await unmount(instance!);
			instance = undefined;
			expect(document.body.ononline).toBe(previous);
		} finally {
			if (instance) await unmount(instance);
			document.body.ononline = previous;
		}
	});
	it('keeps custom on* listeners working and removes them on cleanup', () => {
		const target = document.createElement('div');
		let calls = 0;
		const undo = applyHtmlAttributes(target, { oncustom: () => calls++ });
		target.dispatchEvent(new Event('custom'));
		undo();
		target.dispatchEvent(new Event('custom'));
		expect(calls).toBe(1);
	});
	it('groups direct table rows without mutating input or merging explicit sections', () => {
		const row = () => el('tr', [el('td', [text('x')])]);
		const node = el('table', [row(), text('\n'), el('template'), row(), el('tfoot', [row()])]);
		const original = structuredClone(node);
		const target = render(node);
		const native = document.createElement('div');
		native.innerHTML =
			'<table><tr><td>x</td></tr>\n<template></template><tr><td>x</td></tr><tfoot><tr><td>x</td></tr></tfoot></table>';
		for (const selector of ['table > tbody', 'table > tbody > tr', 'table > tfoot > tr'])
			expect(target.querySelectorAll(selector).length).toBe(
				native.querySelectorAll(selector).length
			);
		expect(node).toEqual(original);
	});
	it('hydrates direct rows through an explicit tbody without recovery and updates in place', () => {
		const target = document.createElement('div');
		document.body.append(target);
		// Node SSR emitted by Svelte 5.57.2 (runes:true, dev:false). The native parser
		// must see the same section boundaries as the client, including hydration markers.
		target.innerHTML =
			'<!--[--><!--[2--><!--[0--><!--[--><table><!--[--><!--[2--><!--[0--><!--[--><tbody><!--[--><!--[2--><!--[0--><!--[--><tr><!--[--><!--[2--><!--[0--><!--[--><td><!--[--><!--[0-->x<!--]--><!--]--><!----></td><!--]--><!--]--><!--]--><!--]--><!----></tr><!--]--><!--]--><!--]--><!--]--><!----></tbody><!--]--><!--]--><!--]--><!--]--><!----></table><!--]--><!--]--><!--]--><!--]-->';
		const table = target.querySelector('table')!;
		const row = target.querySelector('tr')!;
		const state = new SvelteMap([['node', el('table', [el('tr', [el('td', [text('x')])])])]]);
		flushSync(() =>
			instances.push(
				hydrate(Node, {
					target,
					recover: false,
					props: {
						get node() {
							return state.get('node')!;
						}
					}
				})
			)
		);
		expect(target.querySelector('table')).toBe(table);
		expect(target.querySelector('tr')).toBe(row);
		flushSync(() => state.set('node', el('table', [el('tr', [el('td', [text('updated')])])])));
		expect(target.querySelector('tr')).toBe(row);
		expect(row.textContent).toBe('updated');
	});
});
