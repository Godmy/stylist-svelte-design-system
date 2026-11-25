import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLButtonAttributes } from 'svelte/elements';

/** `<button>`: Button control. */
export interface RecipeHtmlButton extends ComputeIntersectAll<[HTMLButtonAttributes]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLButtonElement | null;
}
