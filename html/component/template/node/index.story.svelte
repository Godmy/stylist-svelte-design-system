<script lang="ts">
	import Node from '$stylist/html/component/template/node/index.svelte';
	import type { RecipeHtmlNode } from '$stylist/html/interface/recipe/node';
	import { checkHtmlNode } from '$stylist/html/function/check/html-node';
	import { createHtmlBlockList } from '$stylist/html/function/create/html-block-list';

	// Render of index.story.ts: the tree comes from the story args.
	let { node }: RecipeHtmlNode = $props();

	const issues = $derived(checkHtmlNode(node));
	const blocks = createHtmlBlockList();
	const composites = blocks.filter((block) => 'accepts' in block).length;
</script>

<section class="html-node-story">
	<div class="html-node-story__preview">
		<Node {node} />
	</div>
	<aside class="html-node-story__panel">
		<p>
			Palette: {blocks.length} blocks ({composites} composites, {blocks.length - composites} leaves)
		</p>
		{#if issues.length}
			<ul>
				{#each issues as issue, index (index)}
					<li><code>{issue.code}</code> [{issue.path.join('.')}] {issue.message}</li>
				{/each}
			</ul>
		{:else}
			<p>No composition issues.</p>
		{/if}
	</aside>
</section>

<style>
	.html-node-story {
		display: grid;
		gap: 1.5rem;
		width: 100%;
	}
	@container (min-width: 1024px) {
		.html-node-story {
			grid-template-columns: minmax(0, 1.4fr) minmax(16rem, 1fr);
		}
	}
	.html-node-story__preview,
	.html-node-story__panel {
		border: 1px solid var(--color-border-primary);
		border-radius: 1rem;
		background-color: var(--color-background-primary);
		padding: 1.25rem;
		color: var(--color-text-primary);
	}
	.html-node-story__panel {
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}
</style>
