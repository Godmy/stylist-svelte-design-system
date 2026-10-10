<script lang="ts">
	import HtmlSvg from './index.svelte';
	import type { RecipeHtmlSvg } from '../../../interface/recipe/svg';

	// Render of index.story.ts: SVG content cannot be expressed as an HtmlNode tree.
	let args: RecipeHtmlSvg = $props();
</script>

<HtmlSvg {...args}>
	<rect x="4" y="4" width="112" height="72" rx="8" fill="none" stroke="currentColor" />
	<circle cx="40" cy="40" r="18" fill="currentColor" opacity="0.6" />
	<path d="M64 58 84 22l20 36z" fill="currentColor" />
</HtmlSvg>
