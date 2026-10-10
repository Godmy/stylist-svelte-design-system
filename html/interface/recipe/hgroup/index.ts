import type { HTMLAttributes } from 'svelte/elements';

/** `<hgroup>`: Heading container. */
export interface RecipeHtmlHgroup extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
