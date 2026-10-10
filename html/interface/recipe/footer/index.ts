import type { HTMLAttributes } from 'svelte/elements';

/** `<footer>`: Footer for a page or section. */
export interface RecipeHtmlFooter extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
