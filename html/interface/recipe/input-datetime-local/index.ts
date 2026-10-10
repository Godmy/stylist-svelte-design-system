import type { HTMLInputAttributes } from 'svelte/elements';

/** `<input type="datetime-local">`: trait of `<input>`. */
export interface RecipeHtmlInputDatetimeLocal extends Omit<
	HTMLInputAttributes,
	'children' | 'type'
> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLInputElement | null;
}
