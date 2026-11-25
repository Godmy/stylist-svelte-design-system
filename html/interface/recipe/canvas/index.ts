import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLCanvasAttributes } from 'svelte/elements';

/** `<canvas>`: Scriptable bitmap canvas. */
export interface RecipeHtmlCanvas extends ComputeIntersectAll<[HTMLCanvasAttributes]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLCanvasElement | null;
}
