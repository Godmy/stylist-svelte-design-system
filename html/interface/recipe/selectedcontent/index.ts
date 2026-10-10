import type { HTMLAttributes } from 'svelte/elements';

/** `<selectedcontent>`: Mirrors content from an option. */
export interface RecipeHtmlSelectedcontent extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
