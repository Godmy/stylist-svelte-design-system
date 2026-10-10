import type { HTMLInputAttributes } from 'svelte/elements';

/** `<input type="text">`: trait of `<input>`. */
export interface RecipeHtmlInputText extends Omit<HTMLInputAttributes, 'children' | 'type'> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLInputElement | null;
}
