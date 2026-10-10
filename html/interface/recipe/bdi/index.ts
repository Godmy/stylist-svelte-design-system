import type { HTMLAttributes } from 'svelte/elements';

/** `<bdi>`: Text directionality isolation. */
export interface RecipeHtmlBdi extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
