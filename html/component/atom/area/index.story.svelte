<script lang="ts">
	import HtmlArea from './index.svelte';
	import HtmlMap from '../../molecule/map/index.svelte';
	import HtmlImg from '../img/index.svelte';
	import type { RecipeHtmlArea } from '../../../interface/recipe/area';

	// Render of index.story.ts: <area> only works inside a <map> used by an image.
	let args: RecipeHtmlArea = $props();

	const IMAGE =
		"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='140'%3E%3Crect width='120' height='140' fill='%236366f1'/%3E%3Crect x='120' width='120' height='140' fill='%2394a3b8'/%3E%3C/svg%3E";
</script>

<HtmlImg
	src={IMAGE}
	alt="Image map: left half is a link"
	width={240}
	height={140}
	usemap="#story-map"
/>
<HtmlMap name="story-map">
	<HtmlArea {...args} />
</HtmlMap>
<p>The highlighted left half of the image is the area.</p>
