import type { HTMLImgAttributes } from 'svelte/elements';

/** `<img>`: Image. */
export interface RecipeHtmlImg extends Omit<HTMLImgAttributes, 'children'> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLImageElement | null;
}
