import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLQuoteAttributes } from 'svelte/elements';

/** `<q>`: Quotation. */
export interface RecipeHtmlQ extends ComputeIntersectAll<[HTMLQuoteAttributes]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLQuoteElement | null;
}
