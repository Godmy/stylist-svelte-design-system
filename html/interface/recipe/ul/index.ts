import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLAttributes } from 'svelte/elements';

/** `<ul>`: List. */
export interface RecipeHtmlUl extends ComputeIntersectAll<[HTMLAttributes<HTMLUListElement>]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLUListElement | null;
}
