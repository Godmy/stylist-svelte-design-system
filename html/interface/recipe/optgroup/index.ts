import type { HTMLOptgroupAttributes } from 'svelte/elements';

/** `<optgroup>`: Group of options in a list box. */
export interface RecipeHtmlOptgroup extends HTMLOptgroupAttributes {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLOptGroupElement | null;
}
