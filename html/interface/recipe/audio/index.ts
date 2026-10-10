import type { HTMLAudioAttributes } from 'svelte/elements';

/** `<audio>`: Audio player. */
export interface RecipeHtmlAudio extends HTMLAudioAttributes {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLAudioElement | null;
}
