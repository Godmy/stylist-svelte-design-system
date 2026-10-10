import type { HTMLAttributes } from 'svelte/elements';

/** `<aside>`: Sidebar for tangentially related content. */
export interface RecipeHtmlAside extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
