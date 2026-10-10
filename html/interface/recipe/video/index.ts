import type { HTMLVideoAttributes } from 'svelte/elements';

/** `<video>`: Video player. */
export interface RecipeHtmlVideo extends HTMLVideoAttributes {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLVideoElement | null;
}
