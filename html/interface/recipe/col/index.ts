import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLColAttributes } from 'svelte/elements';

/** `<col>`: Table column. */
export interface RecipeHtmlCol extends ComputeIntersectAll<[Omit<HTMLColAttributes, 'children'>]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLTableColElement | null;
}
