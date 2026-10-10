import type { HTMLAttributes } from 'svelte/elements';

/** `<h4>`: Heading. */
export interface RecipeHtmlH4 extends HTMLAttributes<HTMLHeadingElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLHeadingElement | null;
}
