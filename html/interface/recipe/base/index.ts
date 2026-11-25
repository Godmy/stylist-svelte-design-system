import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLBaseAttributes } from 'svelte/elements';

/** `<base>`: Base URL and default target navigable for hyperlinks and forms. */
export interface RecipeHtmlBase extends ComputeIntersectAll<
	[Omit<HTMLBaseAttributes, 'children'>]
> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLBaseElement | null;
}
