import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLDataAttributes } from 'svelte/elements';

/** `<data>`: Machine-readable equivalent. */
export interface RecipeHtmlData extends ComputeIntersectAll<[HTMLDataAttributes]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLDataElement | null;
}
