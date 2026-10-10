import type { HTMLEmbedAttributes } from 'svelte/elements';

/** `<embed>`: Plugin. */
export interface RecipeHtmlEmbed extends Omit<HTMLEmbedAttributes, 'children'> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLEmbedElement | null;
}
