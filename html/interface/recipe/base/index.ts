import type { HTMLBaseAttributes } from 'svelte/elements';

/** `<base>`: Base URL and default target navigable for hyperlinks and forms. */
export interface RecipeHtmlBase extends Omit<HTMLBaseAttributes, 'children'> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLBaseElement | null;
}
