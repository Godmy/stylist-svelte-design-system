import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLLiAttributes } from 'svelte/elements';

/** `<li>`: List item. */
export interface RecipeHtmlLi extends ComputeIntersectAll<[HTMLLiAttributes]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLLIElement | null;
}
