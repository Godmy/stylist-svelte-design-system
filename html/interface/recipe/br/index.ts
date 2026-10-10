import type { HTMLAttributes } from 'svelte/elements';

/** `<br>`: Line break, e.g. in poem or postal address. */
export interface RecipeHtmlBr extends Omit<HTMLAttributes<HTMLBRElement>, 'children'> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLBRElement | null;
}
