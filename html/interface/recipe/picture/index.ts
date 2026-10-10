import type { HTMLAttributes } from 'svelte/elements';

/** `<picture>`: Image. */
export interface RecipeHtmlPicture extends HTMLAttributes<HTMLPictureElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLPictureElement | null;
}
