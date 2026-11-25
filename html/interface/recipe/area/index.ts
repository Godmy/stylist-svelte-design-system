import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLAreaAttributes } from 'svelte/elements';

/** `<area>`: Hyperlink or dead area on an image map. */
export interface RecipeHtmlArea extends ComputeIntersectAll<
	[Omit<HTMLAreaAttributes, 'children'>]
> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLAreaElement | null;
}
