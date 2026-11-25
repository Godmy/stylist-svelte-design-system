import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotHtmlText } from '$stylist/html/interface/slot/html-text';

/** `<title>`: Document title. */
export interface RecipeHtmlTitle extends ComputeIntersectAll<
	[Omit<HTMLAttributes<HTMLTitleElement>, 'children'>, SlotHtmlText]
> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLTitleElement | null;
}
