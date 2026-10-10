import type { HTMLObjectAttributes } from 'svelte/elements';

/** `<object>`: Image, child navigable, or plugin. */
export interface RecipeHtmlObject extends HTMLObjectAttributes {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLObjectElement | null;
}
