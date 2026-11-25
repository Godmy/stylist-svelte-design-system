import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLInputAttributes } from 'svelte/elements';

/** `<input type="reset">`: trait of `<input>`. */
export interface RecipeHtmlInputReset extends ComputeIntersectAll<
	[Omit<HTMLInputAttributes, 'children' | 'type'>]
> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLInputElement | null;
}
