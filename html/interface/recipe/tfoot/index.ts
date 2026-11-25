import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLAttributes } from 'svelte/elements';

/** `<tfoot>`: Group of footer rows in a table. */
export interface RecipeHtmlTfoot extends ComputeIntersectAll<
	[HTMLAttributes<HTMLTableSectionElement>]
> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLTableSectionElement | null;
}
