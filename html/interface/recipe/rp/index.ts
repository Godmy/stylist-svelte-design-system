import type { HTMLAttributes } from 'svelte/elements';

/** `<rp>`: Parenthesis for ruby annotation text. */
export interface RecipeHtmlRp extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
