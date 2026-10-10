import type { HTMLAttributes } from 'svelte/elements';

/** `<ul>`: List. */
export interface RecipeHtmlUl extends HTMLAttributes<HTMLUListElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLUListElement | null;
}
