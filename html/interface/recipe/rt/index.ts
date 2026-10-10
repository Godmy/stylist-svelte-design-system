import type { HTMLAttributes } from 'svelte/elements';

/** `<rt>`: Ruby annotation text. */
export interface RecipeHtmlRt extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
