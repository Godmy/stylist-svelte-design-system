import type { HTMLAttributes } from 'svelte/elements';

/** `<bdo>`: Text directionality formatting. */
export interface RecipeHtmlBdo extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
