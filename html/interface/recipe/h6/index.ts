import type { HTMLAttributes } from 'svelte/elements';

/** `<h6>`: Heading. */
export interface RecipeHtmlH6 extends HTMLAttributes<HTMLHeadingElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLHeadingElement | null;
}
