import type { HTMLAttributes } from 'svelte/elements';

/** `<head>`: Container for document metadata. */
export interface RecipeHtmlHead extends HTMLAttributes<HTMLHeadElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLHeadElement | null;
}
