import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLInputAttributes } from 'svelte/elements';

/** `<input>`: Form control. */
export interface RecipeHtmlInput extends ComputeIntersectAll<
	[Omit<HTMLInputAttributes, 'children'>]
> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLInputElement | null;
}
