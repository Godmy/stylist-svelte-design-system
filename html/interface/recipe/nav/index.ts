import type { HTMLAttributes } from 'svelte/elements';

/** `<nav>`: Section with navigational links. */
export interface RecipeHtmlNav extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
