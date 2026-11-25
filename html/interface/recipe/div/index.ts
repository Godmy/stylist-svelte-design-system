import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLAttributes } from 'svelte/elements';

/** `<div>`: Generic flow container, or container for name-value groups in dl elements. */
export interface RecipeHtmlDiv extends ComputeIntersectAll<[HTMLAttributes<HTMLDivElement>]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLDivElement | null;
}
