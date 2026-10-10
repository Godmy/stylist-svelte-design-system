import type { HTMLTrackAttributes } from 'svelte/elements';

/** `<track>`: Timed text track. */
export interface RecipeHtmlTrack extends Omit<HTMLTrackAttributes, 'children'> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLTrackElement | null;
}
