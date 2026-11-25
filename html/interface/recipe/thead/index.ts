import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLAttributes } from 'svelte/elements';

/** `<thead>`: Group of heading rows in a table. */
export interface RecipeHtmlThead extends ComputeIntersectAll<
	[HTMLAttributes<HTMLTableSectionElement>]
> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLTableSectionElement | null;
}
