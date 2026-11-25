import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLAttributes } from 'svelte/elements';

/** `<h4>`: Heading. */
export interface RecipeHtmlH4 extends ComputeIntersectAll<[HTMLAttributes<HTMLHeadingElement>]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLHeadingElement | null;
}
