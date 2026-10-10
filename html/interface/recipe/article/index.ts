import type { HTMLAttributes } from 'svelte/elements';

/** `<article>`: Self-contained syndicatable or reusable composition. */
export interface RecipeHtmlArticle extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
