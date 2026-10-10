import type { HTMLLiAttributes } from 'svelte/elements';

/** `<li>`: List item. */
export interface RecipeHtmlLi extends HTMLLiAttributes {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLLIElement | null;
}
