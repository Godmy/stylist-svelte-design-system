import type { HTMLAttributes } from 'svelte/elements';

/** `<address>`: Contact information for a page or article element. */
export interface RecipeHtmlAddress extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
