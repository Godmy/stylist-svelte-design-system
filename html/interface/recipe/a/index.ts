import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLAnchorAttributes } from 'svelte/elements';

/** `<a>`: Hyperlink. */
export interface RecipeHtmlA extends ComputeIntersectAll<[HTMLAnchorAttributes]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLAnchorElement | null;
}
