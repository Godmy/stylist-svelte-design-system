import type { HTMLAttributes } from 'svelte/elements';

/** `<dd>`: Content for corresponding dt element(s). */
export interface RecipeHtmlDd extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
