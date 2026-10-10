import type { HTMLAttributes } from 'svelte/elements';

/** `<figure>`: Figure with optional caption. */
export interface RecipeHtmlFigure extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
