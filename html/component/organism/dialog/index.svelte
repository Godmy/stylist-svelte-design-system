<script lang="ts">
	import type { RecipeHtmlDialog } from '../../../interface/recipe/dialog';

	let {
		element = $bindable(null),
		open = $bindable(false),
		modal = false,
		onclose,
		children,
		...rest
	}: RecipeHtmlDialog = $props();

	$effect(() => {
		const dialog = element;
		if (!dialog || typeof dialog.show !== 'function') return;
		if (open && !dialog.open) {
			if (modal) dialog.showModal();
			else dialog.show();
		} else if (!open && dialog.open) dialog.close();
	});
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
