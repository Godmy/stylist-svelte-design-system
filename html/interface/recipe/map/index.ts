import type { HTMLMapAttributes } from 'svelte/elements';

/** `<map>`: Image map. */
export interface RecipeHtmlMap extends HTMLMapAttributes {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLMapElement | null;
}
