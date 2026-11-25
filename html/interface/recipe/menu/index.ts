import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLMenuAttributes } from 'svelte/elements';

/** `<menu>`: Menu of commands. */
export interface RecipeHtmlMenu extends ComputeIntersectAll<[HTMLMenuAttributes]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLMenuElement | null;
}
