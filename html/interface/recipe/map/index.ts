import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLMapAttributes } from 'svelte/elements';

/** `<map>`: Image map. */
export interface RecipeHtmlMap extends ComputeIntersectAll<[HTMLMapAttributes]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLMapElement | null;
}
