import type { HTMLAreaAttributes } from 'svelte/elements';

/** `<area>`: Hyperlink or dead area on an image map. */
export interface RecipeHtmlArea extends Omit<HTMLAreaAttributes, 'children'> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLAreaElement | null;
}
