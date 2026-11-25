import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLAttributes } from 'svelte/elements';

/** `<dd>`: Content for corresponding dt element(s). */
export interface RecipeHtmlDd extends ComputeIntersectAll<[HTMLAttributes<HTMLElement>]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
