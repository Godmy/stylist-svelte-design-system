import type { HTMLAttributes } from 'svelte/elements';

/** `<small>`: Side comment. */
export interface RecipeHtmlSmall extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
