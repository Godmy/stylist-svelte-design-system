import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLFieldsetAttributes } from 'svelte/elements';

/** `<fieldset>`: Group of form controls. */
export interface RecipeHtmlFieldset extends ComputeIntersectAll<[HTMLFieldsetAttributes]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLFieldSetElement | null;
}
