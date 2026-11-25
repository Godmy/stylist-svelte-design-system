import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLInsAttributes } from 'svelte/elements';

/** `<ins>`: An addition to the document. */
export interface RecipeHtmlIns extends ComputeIntersectAll<[HTMLInsAttributes]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLModElement | null;
}
