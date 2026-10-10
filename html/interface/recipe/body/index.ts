import type { HTMLAttributes } from 'svelte/elements';

/** `<body>`: Document body. */
export interface RecipeHtmlBody extends HTMLAttributes<HTMLBodyElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLBodyElement | null;
}
