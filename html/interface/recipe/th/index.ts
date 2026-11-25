import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLThAttributes } from 'svelte/elements';

/** `<th>`: Table header cell. */
export interface RecipeHtmlTh extends ComputeIntersectAll<[HTMLThAttributes]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLTableCellElement | null;
}
