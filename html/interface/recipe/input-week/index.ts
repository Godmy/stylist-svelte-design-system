import type { HTMLInputAttributes } from 'svelte/elements';

/** `<input type="week">`: trait of `<input>`. */
export interface RecipeHtmlInputWeek extends Omit<HTMLInputAttributes, 'children' | 'type'> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLInputElement | null;
}
