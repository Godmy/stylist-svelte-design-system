import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLAttributes } from 'svelte/elements';

/** `<wbr>`: Line breaking opportunity. */
export interface RecipeHtmlWbr extends ComputeIntersectAll<
	[Omit<HTMLAttributes<HTMLElement>, 'children'>]
> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
