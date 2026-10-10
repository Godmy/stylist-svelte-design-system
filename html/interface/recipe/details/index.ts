import type { HTMLDetailsAttributes } from 'svelte/elements';

/** `<details>`: Disclosure control for hiding details. */
export interface RecipeHtmlDetails extends HTMLDetailsAttributes {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLDetailsElement | null;
	open?: boolean | null;
}
