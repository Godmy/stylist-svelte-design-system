import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLVideoAttributes } from 'svelte/elements';

/** `<video>`: Video player. */
export interface RecipeHtmlVideo extends ComputeIntersectAll<[HTMLVideoAttributes]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLVideoElement | null;
}
