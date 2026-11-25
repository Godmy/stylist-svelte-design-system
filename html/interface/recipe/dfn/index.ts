import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLAttributes } from 'svelte/elements';

/** `<dfn>`: Defining instance. */
export interface RecipeHtmlDfn extends ComputeIntersectAll<[HTMLAttributes<HTMLElement>]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
