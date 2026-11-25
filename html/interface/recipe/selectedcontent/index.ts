import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLAttributes } from 'svelte/elements';

/** `<selectedcontent>`: Mirrors content from an option. */
export interface RecipeHtmlSelectedcontent extends ComputeIntersectAll<
	[Omit<HTMLAttributes<HTMLElement>, 'children'>]
> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
