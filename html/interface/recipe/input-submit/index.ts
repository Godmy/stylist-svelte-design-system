import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLInputAttributes } from 'svelte/elements';

/** `<input type="submit">`: trait of `<input>`. */
export interface RecipeHtmlInputSubmit extends ComputeIntersectAll<
	[Omit<HTMLInputAttributes, 'children' | 'type'>]
> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLInputElement | null;
}
