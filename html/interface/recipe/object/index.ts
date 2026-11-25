import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLObjectAttributes } from 'svelte/elements';

/** `<object>`: Image, child navigable, or plugin. */
export interface RecipeHtmlObject extends ComputeIntersectAll<[HTMLObjectAttributes]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLObjectElement | null;
}
