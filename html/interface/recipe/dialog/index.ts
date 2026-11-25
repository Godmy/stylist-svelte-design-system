import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLDialogAttributes } from 'svelte/elements';

/** `<dialog>`: Dialog box or window. */
export interface RecipeHtmlDialog extends ComputeIntersectAll<
	[Omit<HTMLDialogAttributes, 'open'>]
> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLDialogElement | null;
	open?: boolean;
	/** Open with `showModal()` (top layer, focus trap, Esc). */
	modal?: boolean;
}
