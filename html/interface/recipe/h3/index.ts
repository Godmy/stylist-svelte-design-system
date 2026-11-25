import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLAttributes } from 'svelte/elements';

/** `<h3>`: Heading. */
export interface RecipeHtmlH3 extends ComputeIntersectAll<[HTMLAttributes<HTMLHeadingElement>]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLHeadingElement | null;
}
