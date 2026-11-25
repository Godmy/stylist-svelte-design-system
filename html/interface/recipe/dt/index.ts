import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLAttributes } from 'svelte/elements';

/** `<dt>`: Legend for corresponding dd element(s). */
export interface RecipeHtmlDt extends ComputeIntersectAll<[HTMLAttributes<HTMLElement>]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
