import type { HTMLAttributes } from 'svelte/elements';

/** `<h1>`: Heading. */
export interface RecipeHtmlH1 extends HTMLAttributes<HTMLHeadingElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLHeadingElement | null;
}
