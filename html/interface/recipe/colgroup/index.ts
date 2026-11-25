import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLColgroupAttributes } from 'svelte/elements';

/** `<colgroup>`: Group of columns in a table. */
export interface RecipeHtmlColgroup extends ComputeIntersectAll<[HTMLColgroupAttributes]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLTableColElement | null;
}
