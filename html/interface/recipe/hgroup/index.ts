import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLAttributes } from 'svelte/elements';

/** `<hgroup>`: Heading container. */
export interface RecipeHtmlHgroup extends ComputeIntersectAll<[HTMLAttributes<HTMLElement>]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
