import type { HTMLAttributes } from 'svelte/elements';

/** `<h2>`: Heading. */
export interface RecipeHtmlH2 extends HTMLAttributes<HTMLHeadingElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLHeadingElement | null;
}
