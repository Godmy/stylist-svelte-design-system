import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLAttributes } from 'svelte/elements';

/** `<cite>`: Title of a work. */
export interface RecipeHtmlCite extends ComputeIntersectAll<[HTMLAttributes<HTMLElement>]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
