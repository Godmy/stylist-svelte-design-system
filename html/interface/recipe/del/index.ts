import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLDelAttributes } from 'svelte/elements';

/** `<del>`: A removal from the document. */
export interface RecipeHtmlDel extends ComputeIntersectAll<[HTMLDelAttributes]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLModElement | null;
}
