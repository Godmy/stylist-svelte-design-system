import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLSourceAttributes } from 'svelte/elements';

/** `<source>`: Image source for img or media source for video or audio. */
export interface RecipeHtmlSource extends ComputeIntersectAll<
	[Omit<HTMLSourceAttributes, 'children'>]
> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLSourceElement | null;
}
