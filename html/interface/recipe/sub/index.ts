import type { HTMLAttributes } from 'svelte/elements';

/** `<sub>`: Subscript. */
export interface RecipeHtmlSub extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
