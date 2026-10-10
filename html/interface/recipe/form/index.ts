import type { HTMLFormAttributes } from 'svelte/elements';

/** `<form>`: User-submittable form. */
export interface RecipeHtmlForm extends HTMLFormAttributes {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLFormElement | null;
}
