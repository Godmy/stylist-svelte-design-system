import type { HTMLInputAttributes } from 'svelte/elements';

/** `<input type="password">`: trait of `<input>`. */
export interface RecipeHtmlInputPassword extends Omit<HTMLInputAttributes, 'children' | 'type'> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLInputElement | null;
}
