import type { HTMLLinkAttributes } from 'svelte/elements';

/** `<link>`: Link metadata. */
export interface RecipeHtmlLink extends Omit<HTMLLinkAttributes, 'children'> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLLinkElement | null;
}
