import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLAttributes } from 'svelte/elements';

/** `<h2>`: Heading. */
export interface RecipeHtmlH2 extends ComputeIntersectAll<[HTMLAttributes<HTMLHeadingElement>]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLHeadingElement | null;
}
