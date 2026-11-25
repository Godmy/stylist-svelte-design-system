import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLTdAttributes } from 'svelte/elements';

/** `<td>`: Table cell. */
export interface RecipeHtmlTd extends ComputeIntersectAll<[HTMLTdAttributes]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLTableCellElement | null;
}
