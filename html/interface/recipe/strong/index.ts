import type { HTMLAttributes } from 'svelte/elements';

/** `<strong>`: Importance. */
export interface RecipeHtmlStrong extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
