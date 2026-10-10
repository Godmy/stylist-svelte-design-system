import type { HTMLInputAttributes } from 'svelte/elements';

/** `<input type="search">`: trait of `<input>`. */
export interface RecipeHtmlInputSearch extends Omit<HTMLInputAttributes, 'children' | 'type'> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLInputElement | null;
}
