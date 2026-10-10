import type { HTMLInputAttributes } from 'svelte/elements';

/** `<input type="hidden">`: trait of `<input>`. */
export interface RecipeHtmlInputHidden extends Omit<HTMLInputAttributes, 'children' | 'type'> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLInputElement | null;
}
