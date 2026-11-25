import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLAttributes } from 'svelte/elements';

/** `<span>`: Generic phrasing container. */
export interface RecipeHtmlSpan extends ComputeIntersectAll<[HTMLAttributes<HTMLSpanElement>]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLSpanElement | null;
}
