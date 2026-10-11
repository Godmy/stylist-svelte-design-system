<script lang="ts">
	import type { Component } from 'svelte';
	import type { RecipeHtmlNode } from '../../../interface/recipe/node';
	import { HTML_ELEMENT } from '../../../const/record/html-element';
	import { HTML_INPUT_TYPE } from '../../../const/array/html-input-type';
	import { checkHtmlRawText } from '../../../function/check/html-raw-text';
	import Node from './index.svelte';
	import A from '../../atom/a/index.svelte';
	import Abbr from '../../atom/abbr/index.svelte';
	import Address from '../../organism/address/index.svelte';
	import Area from '../../atom/area/index.svelte';
	import Article from '../../organism/article/index.svelte';
	import Aside from '../../organism/aside/index.svelte';
	import Audio from '../../molecule/audio/index.svelte';
	import B from '../../atom/b/index.svelte';
	import Base from '../../atom/base/index.svelte';
	import Bdi from '../../atom/bdi/index.svelte';
	import Bdo from '../../atom/bdo/index.svelte';
	import Blockquote from '../../organism/blockquote/index.svelte';
	import Body from '../../template/body/index.svelte';
	import Br from '../../atom/br/index.svelte';
	import Button from '../../atom/button/index.svelte';
	import Canvas from '../../atom/canvas/index.svelte';
	import Caption from '../../organism/caption/index.svelte';
	import Cite from '../../atom/cite/index.svelte';
	import Code from '../../atom/code/index.svelte';
	import Col from '../../atom/col/index.svelte';
	import Colgroup from '../../molecule/colgroup/index.svelte';
	import Data from '../../atom/data/index.svelte';
	import Datalist from '../../molecule/datalist/index.svelte';
	import Dd from '../../organism/dd/index.svelte';
	import Del from '../../atom/del/index.svelte';
	import Details from '../../molecule/details/index.svelte';
	import Dfn from '../../atom/dfn/index.svelte';
	import Dialog from '../../organism/dialog/index.svelte';
	import Div from '../../organism/div/index.svelte';
	import Dl from '../../molecule/dl/index.svelte';
	import Dt from '../../organism/dt/index.svelte';
	import Em from '../../atom/em/index.svelte';
	import Embed from '../../atom/embed/index.svelte';
	import Fieldset from '../../molecule/fieldset/index.svelte';
	import Figcaption from '../../organism/figcaption/index.svelte';
	import Figure from '../../molecule/figure/index.svelte';
	import Footer from '../../organism/footer/index.svelte';
	import Form from '../../organism/form/index.svelte';
	import H1 from '../../atom/h1/index.svelte';
	import H2 from '../../atom/h2/index.svelte';
	import H3 from '../../atom/h3/index.svelte';
	import H4 from '../../atom/h4/index.svelte';
	import H5 from '../../atom/h5/index.svelte';
	import H6 from '../../atom/h6/index.svelte';
	import Head from '../../template/head/index.svelte';
	import Header from '../../organism/header/index.svelte';
	import Hgroup from '../../molecule/hgroup/index.svelte';
	import Hr from '../../atom/hr/index.svelte';
	import Html from '../../page/html/index.svelte';
	import I from '../../atom/i/index.svelte';
	import Iframe from '../../atom/iframe/index.svelte';
	import Img from '../../atom/img/index.svelte';
	import Input from '../../atom/input/index.svelte';
	import Ins from '../../atom/ins/index.svelte';
	import Kbd from '../../atom/kbd/index.svelte';
	import Label from '../../atom/label/index.svelte';
	import Legend from '../../atom/legend/index.svelte';
	import Li from '../../organism/li/index.svelte';
	import Link from '../../atom/link/index.svelte';
	import Main from '../../organism/main/index.svelte';
	import Map from '../../molecule/map/index.svelte';
	import Mark from '../../atom/mark/index.svelte';
	import Math from '../../atom/math/index.svelte';
	import Menu from '../../molecule/menu/index.svelte';
	import Meta from '../../atom/meta/index.svelte';
	import Meter from '../../atom/meter/index.svelte';
	import Nav from '../../organism/nav/index.svelte';
	import Noscript from '../../atom/noscript/index.svelte';
	import Object from '../../atom/object/index.svelte';
	import Ol from '../../molecule/ol/index.svelte';
	import Optgroup from '../../molecule/optgroup/index.svelte';
	import Option from '../../atom/option/index.svelte';
	import Output from '../../atom/output/index.svelte';
	import P from '../../atom/p/index.svelte';
	import Picture from '../../molecule/picture/index.svelte';
	import Pre from '../../atom/pre/index.svelte';
	import Progress from '../../atom/progress/index.svelte';
	import Q from '../../atom/q/index.svelte';
	import Rp from '../../atom/rp/index.svelte';
	import Rt from '../../atom/rt/index.svelte';
	import Ruby from '../../molecule/ruby/index.svelte';
	import S from '../../atom/s/index.svelte';
	import Samp from '../../atom/samp/index.svelte';
	import Script from '../../atom/script/index.svelte';
	import Search from '../../organism/search/index.svelte';
	import Section from '../../organism/section/index.svelte';
	import Select from '../../molecule/select/index.svelte';
	import Selectedcontent from '../../atom/selectedcontent/index.svelte';
	import Slot from '../../atom/slot/index.svelte';
	import Small from '../../atom/small/index.svelte';
	import Source from '../../atom/source/index.svelte';
	import Span from '../../atom/span/index.svelte';
	import Strong from '../../atom/strong/index.svelte';
	import Style from '../../atom/style/index.svelte';
	import Sub from '../../atom/sub/index.svelte';
	import Summary from '../../atom/summary/index.svelte';
	import Sup from '../../atom/sup/index.svelte';
	import Svg from '../../atom/svg/index.svelte';
	import Table from '../../molecule/table/index.svelte';
	import Tbody from '../../molecule/tbody/index.svelte';
	import Td from '../../organism/td/index.svelte';
	import Template from '../../organism/template/index.svelte';
	import Textarea from '../../atom/textarea/index.svelte';
	import Tfoot from '../../molecule/tfoot/index.svelte';
	import Th from '../../organism/th/index.svelte';
	import Thead from '../../molecule/thead/index.svelte';
	import Time from '../../atom/time/index.svelte';
	import Title from '../../atom/title/index.svelte';
	import Tr from '../../molecule/tr/index.svelte';
	import Track from '../../atom/track/index.svelte';
	import U from '../../atom/u/index.svelte';
	import Ul from '../../molecule/ul/index.svelte';
	import Var from '../../atom/var/index.svelte';
	import Video from '../../molecule/video/index.svelte';
	import Wbr from '../../atom/wbr/index.svelte';
	import InputHidden from '../../atom/input-hidden/index.svelte';
	import InputText from '../../atom/input-text/index.svelte';
	import InputSearch from '../../atom/input-search/index.svelte';
	import InputTel from '../../atom/input-tel/index.svelte';
	import InputUrl from '../../atom/input-url/index.svelte';
	import InputEmail from '../../atom/input-email/index.svelte';
	import InputPassword from '../../atom/input-password/index.svelte';
	import InputDate from '../../atom/input-date/index.svelte';
	import InputMonth from '../../atom/input-month/index.svelte';
	import InputWeek from '../../atom/input-week/index.svelte';
	import InputTime from '../../atom/input-time/index.svelte';
	import InputDatetimeLocal from '../../atom/input-datetime-local/index.svelte';
	import InputNumber from '../../atom/input-number/index.svelte';
	import InputRange from '../../atom/input-range/index.svelte';
	import InputColor from '../../atom/input-color/index.svelte';
	import InputCheckbox from '../../atom/input-checkbox/index.svelte';
	import InputRadio from '../../atom/input-radio/index.svelte';
	import InputFile from '../../atom/input-file/index.svelte';
	import InputSubmit from '../../atom/input-submit/index.svelte';
	import InputImage from '../../atom/input-image/index.svelte';
	import InputReset from '../../atom/input-reset/index.svelte';
	import InputButton from '../../atom/input-button/index.svelte';

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
		const children = node.children ?? [];
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
