import type { HTMLProgressAttributes } from 'svelte/elements';

/** `<progress>`: Progress bar. */
export interface RecipeHtmlProgress extends HTMLProgressAttributes {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLProgressElement | null;
}
