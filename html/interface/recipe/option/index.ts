import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLOptionAttributes } from 'svelte/elements';

/** `<option>`: Option in a list box or combo box control. */
export interface RecipeHtmlOption extends ComputeIntersectAll<[HTMLOptionAttributes]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLOptionElement | null;
}
