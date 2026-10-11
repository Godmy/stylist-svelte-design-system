import { afterEach, describe, expect, it } from 'vitest';
import { createRawSnippet, flushSync, mount, unmount } from 'svelte';
import Node from '../../../component/template/node/index.svelte';
import type { HtmlNode } from '../../../type/alias/html-node';

describe('Node outlet', () => {
	const instances: ReturnType<typeof mount>[] = [];
	const tree: HtmlNode = {
		kind: 'element',
		tag: 'table',
		children: [
			{
				kind: 'element',
				tag: 'tbody',
				children: [{ kind: 'element', tag: 'tr', children: [{ kind: 'outlet' }] }]
			}
		]
	};

	afterEach(async () => {
		for (const instance of instances.splice(0)) await unmount(instance);
		document.body.innerHTML = '';
	});

	function render(props: Record<string, unknown>) {
		const target = document.createElement('div');
		document.body.append(target);
		flushSync(() => instances.push(mount(Node, { target, props: { node: tree, ...props } })));
		return target;
	}

	it('renders nothing for an outlet without a substitute', () => {
		const target = render({});
		expect(target.querySelector('table > tbody > tr')?.childElementCount).toBe(0);
	});

	it('renders the outlet snippet in place, through the recursion', () => {
		const outlet = createRawSnippet(() => ({ render: () => '<td>Inserted</td>' }));
		const cell = render({ outlet }).querySelector('table > tbody > tr > td');
		expect(cell?.textContent).toBe('Inserted');
	});
});
