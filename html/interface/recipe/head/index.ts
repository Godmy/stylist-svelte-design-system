import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLAttributes } from 'svelte/elements';

/** `<head>`: Container for document metadata. */
export interface RecipeHtmlHead extends ComputeIntersectAll<[HTMLAttributes<HTMLHeadElement>]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLHeadElement | null;
}
