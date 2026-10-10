import type { HTMLAttributes } from 'svelte/elements';

/** `<u>`: Unarticulated annotation. */
export interface RecipeHtmlU extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
