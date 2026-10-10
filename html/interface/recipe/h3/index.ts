import type { HTMLAttributes } from 'svelte/elements';

/** `<h3>`: Heading. */
export interface RecipeHtmlH3 extends HTMLAttributes<HTMLHeadingElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLHeadingElement | null;
}
