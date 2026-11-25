import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLFormAttributes } from 'svelte/elements';

/** `<form>`: User-submittable form. */
export interface RecipeHtmlForm extends ComputeIntersectAll<[HTMLFormAttributes]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLFormElement | null;
}
