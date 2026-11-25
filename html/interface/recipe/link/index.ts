import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLLinkAttributes } from 'svelte/elements';

/** `<link>`: Link metadata. */
export interface RecipeHtmlLink extends ComputeIntersectAll<
	[Omit<HTMLLinkAttributes, 'children'>]
> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLLinkElement | null;
}
