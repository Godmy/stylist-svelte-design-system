import type { HTMLAttributes } from 'svelte/elements';

/** `<ruby>`: Ruby annotation(s). */
export interface RecipeHtmlRuby extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
