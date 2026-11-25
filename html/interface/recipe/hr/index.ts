import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLAttributes } from 'svelte/elements';

/** `<hr>`: Thematic break. */
export interface RecipeHtmlHr extends ComputeIntersectAll<
	[Omit<HTMLAttributes<HTMLHRElement>, 'children'>]
> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLHRElement | null;
}
