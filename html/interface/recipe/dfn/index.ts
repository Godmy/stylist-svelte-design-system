import type { HTMLAttributes } from 'svelte/elements';

/** `<dfn>`: Defining instance. */
export interface RecipeHtmlDfn extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
