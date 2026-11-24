<script lang="ts">
	import type { RecipeHtmlNode } from '$stylist/html/interface/recipe/node';

	import Node from '$stylist/html/component/template/node/index.svelte';

	import createNodeComponentState from '$stylist/html/component/template/node/state.svelte';

	let { node, outlet }: RecipeHtmlNode = $props();

	const state = createNodeComponentState(() => ({ node: node }));
</script>

{#if node.kind === 'text'}{node.value}{:else if node.kind === 'outlet'}{@render outlet?.()}{:else if state.view?.Element}
	{#if state.view.children.length}
		<state.view.Element {...state.view.attrs}>
			{#each state.view.children as child, index (index)}<Node node={child} {outlet} />{/each}
		</state.view.Element>
	{:else}
		<state.view.Element {...state.view.attrs} />
	{/if}
{/if}
