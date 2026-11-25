import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLDetailsAttributes } from 'svelte/elements';

/** `<details>`: Disclosure control for hiding details. */
export interface RecipeHtmlDetails extends ComputeIntersectAll<[HTMLDetailsAttributes]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLDetailsElement | null;
	open?: boolean | null;
}
