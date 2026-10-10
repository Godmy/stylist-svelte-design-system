import type { HTMLAttributes } from 'svelte/elements';

/** `<p>`: Paragraph. */
export interface RecipeHtmlP extends HTMLAttributes<HTMLParagraphElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLParagraphElement | null;
}
