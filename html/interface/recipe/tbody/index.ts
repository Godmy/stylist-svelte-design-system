import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLAttributes } from 'svelte/elements';

/** `<tbody>`: Group of rows in a table. */
export interface RecipeHtmlTbody extends ComputeIntersectAll<
	[HTMLAttributes<HTMLTableSectionElement>]
> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLTableSectionElement | null;
}
