import type { HTMLAttributes } from 'svelte/elements';

/** `<noscript>`: Fallback content for script. */
export interface RecipeHtmlNoscript extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
