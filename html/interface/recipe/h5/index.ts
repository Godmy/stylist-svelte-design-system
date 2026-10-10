import type { HTMLAttributes } from 'svelte/elements';

/** `<h5>`: Heading. */
export interface RecipeHtmlH5 extends HTMLAttributes<HTMLHeadingElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLHeadingElement | null;
}
