import type { RecipeHtmlDialog } from '$stylist/html/interface/recipe/dialog';
/** Reactive behavior of dialog; props are read lazily when needed. */
export function createDialogComponentState(
	getProps: () => Pick<RecipeHtmlDialog, 'element' | 'open' | 'modal'> & {
		element: Exclude<RecipeHtmlDialog['element'], undefined>;
		open: Exclude<RecipeHtmlDialog['open'], undefined>;
		modal: Exclude<RecipeHtmlDialog['modal'], undefined>;
	}
) {
	const props = $derived(getProps());
	$effect(() => {
		const dialog = props['element'];
		if (!dialog || typeof dialog.show !== 'function') return;
		if (props['open'] && !dialog.open) {
			if (props['modal']) dialog.showModal();
			else dialog.show();
		} else if (!props['open'] && dialog.open) dialog.close();
	});
	return {};
}
export default createDialogComponentState;
