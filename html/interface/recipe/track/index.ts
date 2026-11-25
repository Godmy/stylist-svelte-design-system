import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLTrackAttributes } from 'svelte/elements';

/** `<track>`: Timed text track. */
export interface RecipeHtmlTrack extends ComputeIntersectAll<
	[Omit<HTMLTrackAttributes, 'children'>]
> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLTrackElement | null;
}
