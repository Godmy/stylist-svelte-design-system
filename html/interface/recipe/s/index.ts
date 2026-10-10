import type { HTMLAttributes } from 'svelte/elements';

/** `<s>`: Inaccurate text. */
export interface RecipeHtmlS extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
