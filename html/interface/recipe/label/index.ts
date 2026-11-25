import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLLabelAttributes } from 'svelte/elements';

/** `<label>`: Caption for a form control. */
export interface RecipeHtmlLabel extends ComputeIntersectAll<[HTMLLabelAttributes]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLLabelElement | null;
}
