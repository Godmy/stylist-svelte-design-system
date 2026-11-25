import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLAttributes } from 'svelte/elements';

/** `<pre>`: Block of preformatted text. */
export interface RecipeHtmlPre extends ComputeIntersectAll<[HTMLAttributes<HTMLPreElement>]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLPreElement | null;
}
