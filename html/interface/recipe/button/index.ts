import type { HTMLButtonAttributes } from 'svelte/elements';

/** `<button>`: Button control. */
export interface RecipeHtmlButton extends HTMLButtonAttributes {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLButtonElement | null;
}
