import type { HTMLAttributes } from 'svelte/elements';

/** `<kbd>`: User input. */
export interface RecipeHtmlKbd extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
