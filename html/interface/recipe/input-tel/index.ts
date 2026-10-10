import type { HTMLInputAttributes } from 'svelte/elements';

/** `<input type="tel">`: trait of `<input>`. */
export interface RecipeHtmlInputTel extends Omit<HTMLInputAttributes, 'children' | 'type'> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLInputElement | null;
}
