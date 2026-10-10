<script lang="ts">
	import type { RecipeHtmlBody } from '../../../interface/recipe/body';
	import { applyHtmlAttributes } from '../../../function/script/html-attributes';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars -- bindable output: the existing document node
	let { element = $bindable(null), children, ...rest }: RecipeHtmlBody = $props();

	$effect(() => {
		element = document.body as HTMLBodyElement;
		return applyHtmlAttributes(document.body, rest);
	});
</script>

{@render children?.()}
