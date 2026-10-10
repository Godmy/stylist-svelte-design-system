import type { HTMLAttributes } from 'svelte/elements';

/** `<caption>`: Table caption. */
export interface RecipeHtmlCaption extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLTableCaptionElement | null;
}
