import type { HTMLAttributes } from 'svelte/elements';

/** `<header>`: Introductory or navigational aids for a page or section. */
export interface RecipeHtmlHeader extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
