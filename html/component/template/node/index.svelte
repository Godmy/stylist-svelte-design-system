<script lang="ts">
	import type { Component } from 'svelte';
	import type { RecipeHtmlNode } from '$stylist/html/interface/recipe/node';
	import { HTML_ELEMENT } from '$stylist/html/const/record/html-element';
	import { HTML_INPUT_TYPE } from '$stylist/html/const/array/html-input-type';
	import { checkHtmlRawText } from '$stylist/html/function/check/html-raw-text';
	import Node from '$stylist/html/component/template/node/index.svelte';
	import A from '$stylist/html/component/atom/a/index.svelte';
	import Abbr from '$stylist/html/component/atom/abbr/index.svelte';
	import Address from '$stylist/html/component/organism/address/index.svelte';
	import Area from '$stylist/html/component/atom/area/index.svelte';
	import Article from '$stylist/html/component/organism/article/index.svelte';
	import Aside from '$stylist/html/component/organism/aside/index.svelte';
	import Audio from '$stylist/html/component/molecule/audio/index.svelte';
	import B from '$stylist/html/component/atom/b/index.svelte';
	import Base from '$stylist/html/component/atom/base/index.svelte';
	import Bdi from '$stylist/html/component/atom/bdi/index.svelte';
	import Bdo from '$stylist/html/component/atom/bdo/index.svelte';
	import Blockquote from '$stylist/html/component/organism/blockquote/index.svelte';
	import Body from '$stylist/html/component/template/body/index.svelte';
	import Br from '$stylist/html/component/atom/br/index.svelte';
	import Button from '$stylist/html/component/atom/button/index.svelte';
	import Canvas from '$stylist/html/component/atom/canvas/index.svelte';
	import Caption from '$stylist/html/component/organism/caption/index.svelte';
	import Cite from '$stylist/html/component/atom/cite/index.svelte';
	import Code from '$stylist/html/component/atom/code/index.svelte';
	import Col from '$stylist/html/component/atom/col/index.svelte';
	import Colgroup from '$stylist/html/component/molecule/colgroup/index.svelte';
	import Data from '$stylist/html/component/atom/data/index.svelte';
	import Datalist from '$stylist/html/component/molecule/datalist/index.svelte';
	import Dd from '$stylist/html/component/organism/dd/index.svelte';
	import Del from '$stylist/html/component/atom/del/index.svelte';
	import Details from '$stylist/html/component/molecule/details/index.svelte';
	import Dfn from '$stylist/html/component/atom/dfn/index.svelte';
	import Dialog from '$stylist/html/component/organism/dialog/index.svelte';
	import Div from '$stylist/html/component/organism/div/index.svelte';
	import Dl from '$stylist/html/component/molecule/dl/index.svelte';
	import Dt from '$stylist/html/component/organism/dt/index.svelte';
	import Em from '$stylist/html/component/atom/em/index.svelte';
	import Embed from '$stylist/html/component/atom/embed/index.svelte';
	import Fieldset from '$stylist/html/component/molecule/fieldset/index.svelte';
	import Figcaption from '$stylist/html/component/organism/figcaption/index.svelte';
	import Figure from '$stylist/html/component/molecule/figure/index.svelte';
	import Footer from '$stylist/html/component/organism/footer/index.svelte';
	import Form from '$stylist/html/component/organism/form/index.svelte';
	import H1 from '$stylist/html/component/atom/h1/index.svelte';
	import H2 from '$stylist/html/component/atom/h2/index.svelte';
	import H3 from '$stylist/html/component/atom/h3/index.svelte';
	import H4 from '$stylist/html/component/atom/h4/index.svelte';
	import H5 from '$stylist/html/component/atom/h5/index.svelte';
	import H6 from '$stylist/html/component/atom/h6/index.svelte';
	import Head from '$stylist/html/component/template/head/index.svelte';
	import Header from '$stylist/html/component/organism/header/index.svelte';
	import Hgroup from '$stylist/html/component/molecule/hgroup/index.svelte';
	import Hr from '$stylist/html/component/atom/hr/index.svelte';
	import Html from '$stylist/html/component/page/html/index.svelte';
	import I from '$stylist/html/component/atom/i/index.svelte';
	import Iframe from '$stylist/html/component/atom/iframe/index.svelte';
	import Img from '$stylist/html/component/atom/img/index.svelte';
	import Input from '$stylist/html/component/atom/input/index.svelte';
	import Ins from '$stylist/html/component/atom/ins/index.svelte';
	import Kbd from '$stylist/html/component/atom/kbd/index.svelte';
	import Label from '$stylist/html/component/atom/label/index.svelte';
	import Legend from '$stylist/html/component/atom/legend/index.svelte';
	import Li from '$stylist/html/component/organism/li/index.svelte';
	import Link from '$stylist/html/component/atom/link/index.svelte';
	import Main from '$stylist/html/component/organism/main/index.svelte';
	import Map from '$stylist/html/component/molecule/map/index.svelte';
	import Mark from '$stylist/html/component/atom/mark/index.svelte';
	import Math from '$stylist/html/component/atom/math/index.svelte';
	import Menu from '$stylist/html/component/molecule/menu/index.svelte';
	import Meta from '$stylist/html/component/atom/meta/index.svelte';
	import Meter from '$stylist/html/component/atom/meter/index.svelte';
	import Nav from '$stylist/html/component/organism/nav/index.svelte';
	import Noscript from '$stylist/html/component/atom/noscript/index.svelte';
	import Object from '$stylist/html/component/atom/object/index.svelte';
	import Ol from '$stylist/html/component/molecule/ol/index.svelte';
	import Optgroup from '$stylist/html/component/molecule/optgroup/index.svelte';
	import Option from '$stylist/html/component/atom/option/index.svelte';
	import Output from '$stylist/html/component/atom/output/index.svelte';
	import P from '$stylist/html/component/atom/p/index.svelte';
	import Picture from '$stylist/html/component/molecule/picture/index.svelte';
	import Pre from '$stylist/html/component/atom/pre/index.svelte';
	import Progress from '$stylist/html/component/atom/progress/index.svelte';
	import Q from '$stylist/html/component/atom/q/index.svelte';
	import Rp from '$stylist/html/component/atom/rp/index.svelte';
	import Rt from '$stylist/html/component/atom/rt/index.svelte';
	import Ruby from '$stylist/html/component/molecule/ruby/index.svelte';
	import S from '$stylist/html/component/atom/s/index.svelte';
	import Samp from '$stylist/html/component/atom/samp/index.svelte';
	import Script from '$stylist/html/component/atom/script/index.svelte';
	import Search from '$stylist/html/component/organism/search/index.svelte';
	import Section from '$stylist/html/component/organism/section/index.svelte';
	import Select from '$stylist/html/component/molecule/select/index.svelte';
	import Selectedcontent from '$stylist/html/component/atom/selectedcontent/index.svelte';
	import Slot from '$stylist/html/component/atom/slot/index.svelte';
	import Small from '$stylist/html/component/atom/small/index.svelte';
	import Source from '$stylist/html/component/atom/source/index.svelte';
	import Span from '$stylist/html/component/atom/span/index.svelte';
	import Strong from '$stylist/html/component/atom/strong/index.svelte';
	import Style from '$stylist/html/component/atom/style/index.svelte';
	import Sub from '$stylist/html/component/atom/sub/index.svelte';
	import Summary from '$stylist/html/component/atom/summary/index.svelte';
	import Sup from '$stylist/html/component/atom/sup/index.svelte';
	import Svg from '$stylist/html/component/atom/svg/index.svelte';
	import Table from '$stylist/html/component/molecule/table/index.svelte';
	import Tbody from '$stylist/html/component/molecule/tbody/index.svelte';
	import Td from '$stylist/html/component/organism/td/index.svelte';
	import Template from '$stylist/html/component/organism/template/index.svelte';
	import Textarea from '$stylist/html/component/atom/textarea/index.svelte';
	import Tfoot from '$stylist/html/component/molecule/tfoot/index.svelte';
	import Th from '$stylist/html/component/organism/th/index.svelte';
	import Thead from '$stylist/html/component/molecule/thead/index.svelte';
	import Time from '$stylist/html/component/atom/time/index.svelte';
	import Title from '$stylist/html/component/atom/title/index.svelte';
	import Tr from '$stylist/html/component/molecule/tr/index.svelte';
	import Track from '$stylist/html/component/atom/track/index.svelte';
	import U from '$stylist/html/component/atom/u/index.svelte';
	import Ul from '$stylist/html/component/molecule/ul/index.svelte';
	import Var from '$stylist/html/component/atom/var/index.svelte';
	import Video from '$stylist/html/component/molecule/video/index.svelte';
	import Wbr from '$stylist/html/component/atom/wbr/index.svelte';
	import InputHidden from '$stylist/html/component/atom/input-hidden/index.svelte';
	import InputText from '$stylist/html/component/atom/input-text/index.svelte';
	import InputSearch from '$stylist/html/component/atom/input-search/index.svelte';
	import InputTel from '$stylist/html/component/atom/input-tel/index.svelte';
	import InputUrl from '$stylist/html/component/atom/input-url/index.svelte';
	import InputEmail from '$stylist/html/component/atom/input-email/index.svelte';
	import InputPassword from '$stylist/html/component/atom/input-password/index.svelte';
	import InputDate from '$stylist/html/component/atom/input-date/index.svelte';
	import InputMonth from '$stylist/html/component/atom/input-month/index.svelte';
	import InputWeek from '$stylist/html/component/atom/input-week/index.svelte';
	import InputTime from '$stylist/html/component/atom/input-time/index.svelte';
	import InputDatetimeLocal from '$stylist/html/component/atom/input-datetime-local/index.svelte';
	import InputNumber from '$stylist/html/component/atom/input-number/index.svelte';
	import InputRange from '$stylist/html/component/atom/input-range/index.svelte';
	import InputColor from '$stylist/html/component/atom/input-color/index.svelte';
	import InputCheckbox from '$stylist/html/component/atom/input-checkbox/index.svelte';
	import InputRadio from '$stylist/html/component/atom/input-radio/index.svelte';
	import InputFile from '$stylist/html/component/atom/input-file/index.svelte';
	import InputSubmit from '$stylist/html/component/atom/input-submit/index.svelte';
	import InputImage from '$stylist/html/component/atom/input-image/index.svelte';
	import InputReset from '$stylist/html/component/atom/input-reset/index.svelte';
	import InputButton from '$stylist/html/component/atom/input-button/index.svelte';

	let { node, outlet }: RecipeHtmlNode = $props();

	// Composite dispatch: tag (or `input-<type>` trait) -> leaf/composite component.
	// eslint-disable-next-line @typescript-eslint/no-explicit-any -- each entry has its own recipe
	const components: Record<string, Component<any>> = {
		a: A,
		abbr: Abbr,
		address: Address,
		area: Area,
		article: Article,
		aside: Aside,
		audio: Audio,
		b: B,
		base: Base,
		bdi: Bdi,
		bdo: Bdo,
		blockquote: Blockquote,
		body: Body,
		br: Br,
		button: Button,
		canvas: Canvas,
		caption: Caption,
		cite: Cite,
		code: Code,
		col: Col,
		colgroup: Colgroup,
		data: Data,
		datalist: Datalist,
		dd: Dd,
		del: Del,
		details: Details,
		dfn: Dfn,
		dialog: Dialog,
		div: Div,
		dl: Dl,
		dt: Dt,
		em: Em,
		embed: Embed,
		fieldset: Fieldset,
		figcaption: Figcaption,
		figure: Figure,
		footer: Footer,
		form: Form,
		h1: H1,
		h2: H2,
		h3: H3,
		h4: H4,
		h5: H5,
		h6: H6,
		head: Head,
		header: Header,
		hgroup: Hgroup,
		hr: Hr,
		html: Html,
		i: I,
		iframe: Iframe,
		img: Img,
		input: Input,
		ins: Ins,
		kbd: Kbd,
		label: Label,
		legend: Legend,
		li: Li,
		link: Link,
		main: Main,
		map: Map,
		mark: Mark,
		math: Math,
		menu: Menu,
		meta: Meta,
		meter: Meter,
		nav: Nav,
		noscript: Noscript,
		object: Object,
		ol: Ol,
		optgroup: Optgroup,
		option: Option,
		output: Output,
		p: P,
		picture: Picture,
		pre: Pre,
		progress: Progress,
		q: Q,
		rp: Rp,
		rt: Rt,
		ruby: Ruby,
		s: S,
		samp: Samp,
		script: Script,
		search: Search,
		section: Section,
		select: Select,
		selectedcontent: Selectedcontent,
		slot: Slot,
		small: Small,
		source: Source,
		span: Span,
		strong: Strong,
		style: Style,
		sub: Sub,
		summary: Summary,
		sup: Sup,
		svg: Svg,
		table: Table,
		tbody: Tbody,
		td: Td,
		template: Template,
		textarea: Textarea,
		tfoot: Tfoot,
		th: Th,
		thead: Thead,
		time: Time,
		title: Title,
		tr: Tr,
		track: Track,
		u: U,
		ul: Ul,
		var: Var,
		video: Video,
		wbr: Wbr,
		'input-hidden': InputHidden,
		'input-text': InputText,
		'input-search': InputSearch,
		'input-tel': InputTel,
		'input-url': InputUrl,
		'input-email': InputEmail,
		'input-password': InputPassword,
		'input-date': InputDate,
		'input-month': InputMonth,
		'input-week': InputWeek,
		'input-time': InputTime,
		'input-datetime-local': InputDatetimeLocal,
		'input-number': InputNumber,
		'input-range': InputRange,
		'input-color': InputColor,
		'input-checkbox': InputCheckbox,
		'input-radio': InputRadio,
		'input-file': InputFile,
		'input-submit': InputSubmit,
		'input-image': InputImage,
		'input-reset': InputReset,
		'input-button': InputButton
	};

	const view = $derived.by(() => {
		if (node.kind !== 'element') return null;
		const attrs: Record<string, unknown> = { ...node.attrs };
		if (node.id) attrs['data-html-node'] = node.id;
		const type = node.tag === 'input' ? String(attrs.type ?? '').toLowerCase() : '';
		const trait = (HTML_INPUT_TYPE as readonly string[]).includes(type) ? `input-${type}` : '';
		const spec = HTML_ELEMENT[node.tag];
		let children = node.children ?? [];
		if (node.tag === 'table') {
			// HTML parsing inserts tbody around direct rows. Emit the same structure
			// before SSR so hydration markers and the client tree stay in agreement.
			const normalized: typeof children = [];
			let rows: typeof children = [];
			for (const child of children) {
				if (child.kind === 'element' && child.tag === 'tr') {
					if (!rows.length) normalized.push({ kind: 'element', tag: 'tbody', children: rows });
					rows.push(child);
				} else if (
					rows.length &&
					((child.kind === 'text' && /^[\t\n\f\r ]*$/.test(child.value)) ||
						(child.kind === 'element' && ['script', 'template'].includes(child.tag)))
				) {
					rows.push(child);
				} else {
					rows = [];
					normalized.push(child);
				}
			}
			children = normalized;
		}
		const text = children.map((child) => (child.kind === 'text' ? child.value : '')).join('');
		// Explicit props take precedence; otherwise derive content from text children.
		if ((spec?.content === 'raw-text' || node.tag === 'title') && attrs.text === undefined)
			attrs.text = text;
		if (node.tag === 'textarea' && attrs.value === undefined) attrs.value = text;
		// title/style/script/textarea receive text through props; rp keeps its text children.
		const leaf =
			!spec ||
			['empty', 'raw-text'].includes(spec.content) ||
			node.tag === 'title' ||
			node.tag === 'textarea';
		// checkHtmlNode reports invalid raw text; skipping it keeps the preview rendering.
		const broken =
			(node.tag === 'style' || node.tag === 'script') &&
			!checkHtmlRawText(node.tag, String(attrs.text ?? ''));
		return {
			Element: broken ? undefined : components[trait || node.tag],
			attrs,
			children: leaf ? [] : children
		};
	});
</script>

{#if node.kind === 'text'}{node.value}{:else if node.kind === 'outlet'}{@render outlet?.()}{:else if view?.Element}
	{#if view.children.length}
		<view.Element {...view.attrs}>
			{#each view.children as child, index (index)}<Node node={child} {outlet} />{/each}
		</view.Element>
	{:else}
		<view.Element {...view.attrs} />
	{/if}
{/if}
