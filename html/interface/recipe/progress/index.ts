import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLProgressAttributes } from 'svelte/elements';

/** `<progress>`: Progress bar. */
export interface RecipeHtmlProgress extends ComputeIntersectAll<[HTMLProgressAttributes]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLProgressElement | null;
}
