import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLBlockquoteAttributes } from 'svelte/elements';

/** `<blockquote>`: A section quoted from another source. */
export interface RecipeHtmlBlockquote extends ComputeIntersectAll<[HTMLBlockquoteAttributes]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLQuoteElement | null;
}
