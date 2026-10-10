import type { HTMLTextareaAttributes } from 'svelte/elements';

/** `<textarea>`: Multiline text controls. */
export interface RecipeHtmlTextarea extends Omit<HTMLTextareaAttributes, 'children'> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLTextAreaElement | null;
}
