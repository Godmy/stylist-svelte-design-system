import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLTextareaAttributes } from 'svelte/elements';

/** `<textarea>`: Multiline text controls. */
export interface RecipeHtmlTextarea extends ComputeIntersectAll<
	[Omit<HTMLTextareaAttributes, 'children'>]
> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLTextAreaElement | null;
}
