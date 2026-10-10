import type { HTMLAnchorAttributes } from 'svelte/elements';

/** `<a>`: Hyperlink. */
export interface RecipeHtmlA extends HTMLAnchorAttributes {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLAnchorElement | null;
}
