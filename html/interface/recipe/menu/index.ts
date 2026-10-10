import type { HTMLMenuAttributes } from 'svelte/elements';

/** `<menu>`: Menu of commands. */
export interface RecipeHtmlMenu extends HTMLMenuAttributes {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLMenuElement | null;
}
