import type { HTMLAttributes } from 'svelte/elements';

/** `<dl>`: Association list consisting of zero or more name-value groups. */
export interface RecipeHtmlDl extends HTMLAttributes<HTMLDListElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLDListElement | null;
}
