import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLOlAttributes } from 'svelte/elements';

/** `<ol>`: Ordered list. */
export interface RecipeHtmlOl extends ComputeIntersectAll<[HTMLOlAttributes]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLOListElement | null;
}
