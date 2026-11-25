import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLOptgroupAttributes } from 'svelte/elements';

/** `<optgroup>`: Group of options in a list box. */
export interface RecipeHtmlOptgroup extends ComputeIntersectAll<[HTMLOptgroupAttributes]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLOptGroupElement | null;
}
