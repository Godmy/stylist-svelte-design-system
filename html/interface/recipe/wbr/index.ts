import type { HTMLAttributes } from 'svelte/elements';

/** `<wbr>`: Line breaking opportunity. */
export interface RecipeHtmlWbr extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
