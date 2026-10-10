import type { HTMLAttributes } from 'svelte/elements';

/** `<section>`: Generic document or application section. */
export interface RecipeHtmlSection extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
