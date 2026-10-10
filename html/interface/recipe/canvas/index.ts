import type { HTMLCanvasAttributes } from 'svelte/elements';

/** `<canvas>`: Scriptable bitmap canvas. */
export interface RecipeHtmlCanvas extends HTMLCanvasAttributes {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLCanvasElement | null;
}
