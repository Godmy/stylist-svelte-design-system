import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLSlotAttributes } from 'svelte/elements';

/** `<slot>`: Shadow tree slot. */
export interface RecipeHtmlSlot extends ComputeIntersectAll<[HTMLSlotAttributes]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLSlotElement | null;
}
