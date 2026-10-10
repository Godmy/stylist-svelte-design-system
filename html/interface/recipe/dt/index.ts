import type { HTMLAttributes } from 'svelte/elements';

/** `<dt>`: Legend for corresponding dd element(s). */
export interface RecipeHtmlDt extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
