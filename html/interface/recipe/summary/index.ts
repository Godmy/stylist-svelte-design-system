import type { HTMLAttributes } from 'svelte/elements';

/** `<summary>`: Caption for details. */
export interface RecipeHtmlSummary extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
