import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLEmbedAttributes } from 'svelte/elements';

/** `<embed>`: Plugin. */
export interface RecipeHtmlEmbed extends ComputeIntersectAll<
	[Omit<HTMLEmbedAttributes, 'children'>]
> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLEmbedElement | null;
}
