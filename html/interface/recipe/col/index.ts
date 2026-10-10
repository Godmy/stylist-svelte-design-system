import type { HTMLColAttributes } from 'svelte/elements';

/** `<col>`: Table column. */
export interface RecipeHtmlCol extends Omit<HTMLColAttributes, 'children'> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLTableColElement | null;
}
