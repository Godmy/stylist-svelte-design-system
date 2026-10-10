import type { HTMLInputAttributes } from 'svelte/elements';

/** `<input type="reset">`: trait of `<input>`. */
export interface RecipeHtmlInputReset extends Omit<HTMLInputAttributes, 'children' | 'type'> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLInputElement | null;
}
