import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLSelectAttributes } from 'svelte/elements';

/** `<select>`: List box control. */
export interface RecipeHtmlSelect extends ComputeIntersectAll<[HTMLSelectAttributes]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLSelectElement | null;
}
