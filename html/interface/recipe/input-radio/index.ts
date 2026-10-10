import type { HTMLInputAttributes } from 'svelte/elements';

/** `<input type="radio">`: trait of `<input>`. */
export interface RecipeHtmlInputRadio extends Omit<HTMLInputAttributes, 'children' | 'type'> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLInputElement | null;
	/** Radio group value (`bind:group`). */
	group?: unknown;
}
