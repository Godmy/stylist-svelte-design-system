import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLAttributes } from 'svelte/elements';

/** `<tr>`: Table row. */
export interface RecipeHtmlTr extends ComputeIntersectAll<[HTMLAttributes<HTMLTableRowElement>]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLTableRowElement | null;
}
