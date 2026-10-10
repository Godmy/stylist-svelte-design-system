import type { HTMLAttributes } from 'svelte/elements';

/** `<code>`: Computer code. */
export interface RecipeHtmlCode extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
