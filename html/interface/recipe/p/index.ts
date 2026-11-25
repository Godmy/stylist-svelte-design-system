import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLAttributes } from 'svelte/elements';

/** `<p>`: Paragraph. */
export interface RecipeHtmlP extends ComputeIntersectAll<[HTMLAttributes<HTMLParagraphElement>]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLParagraphElement | null;
}
