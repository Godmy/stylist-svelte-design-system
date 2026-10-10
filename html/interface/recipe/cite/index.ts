import type { HTMLAttributes } from 'svelte/elements';

/** `<cite>`: Title of a work. */
export interface RecipeHtmlCite extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
