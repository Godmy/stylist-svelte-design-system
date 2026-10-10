import type { HTMLAttributes } from 'svelte/elements';

/** `<hr>`: Thematic break. */
export interface RecipeHtmlHr extends Omit<HTMLAttributes<HTMLHRElement>, 'children'> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLHRElement | null;
}
