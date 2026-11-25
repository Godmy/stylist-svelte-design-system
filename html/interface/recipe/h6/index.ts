import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLAttributes } from 'svelte/elements';

/** `<h6>`: Heading. */
export interface RecipeHtmlH6 extends ComputeIntersectAll<[HTMLAttributes<HTMLHeadingElement>]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLHeadingElement | null;
}
