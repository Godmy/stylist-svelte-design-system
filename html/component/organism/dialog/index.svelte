<script lang="ts">
	import type { RecipeHtmlDialog } from '$stylist/html/interface/recipe/dialog';
	import createDialogComponentState from '$stylist/html/component/organism/dialog/state.svelte';

	let {
		element = $bindable(null),
		open = $bindable(false),
		modal = false,
		onclose,
		children,
		...rest
	}: RecipeHtmlDialog = $props();

	const state = createDialogComponentState(() => ({ element: element, open: open, modal: modal }));
</script>

<dialog
	bind:this={element}
	{...rest}
	onclose={(event) => {
		open = false;
		onclose?.(event);
	}}
>
	{@render children?.()}
</dialog>
