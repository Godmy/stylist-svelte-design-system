import type { HTMLAttributes } from 'svelte/elements';

/** `<b>`: Keywords. */
export interface RecipeHtmlB extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
