import type { HTMLAttributes } from 'svelte/elements';

/** `<figcaption>`: Caption for figure. */
export interface RecipeHtmlFigcaption extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
