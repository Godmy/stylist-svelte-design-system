import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLOutputAttributes } from 'svelte/elements';

/** `<output>`: Calculated output value. */
export interface RecipeHtmlOutput extends ComputeIntersectAll<[HTMLOutputAttributes]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLOutputElement | null;
}
