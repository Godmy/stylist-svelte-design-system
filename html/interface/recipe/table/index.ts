import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLTableAttributes } from 'svelte/elements';

/** `<table>`: Table. */
export interface RecipeHtmlTable extends ComputeIntersectAll<[HTMLTableAttributes]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLTableElement | null;
}
