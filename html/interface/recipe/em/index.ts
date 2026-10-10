import type { HTMLAttributes } from 'svelte/elements';

/** `<em>`: Stress emphasis. */
export interface RecipeHtmlEm extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
