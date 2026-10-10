import type { HTMLInputAttributes } from 'svelte/elements';

/** `<input type="checkbox">`: trait of `<input>`. */
export interface RecipeHtmlInputCheckbox extends Omit<HTMLInputAttributes, 'children' | 'type'> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLInputElement | null;
}
