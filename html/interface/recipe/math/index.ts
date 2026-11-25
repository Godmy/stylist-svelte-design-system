import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLAttributes } from 'svelte/elements';

/** `<math>`: MathML root. */
export interface RecipeHtmlMath extends ComputeIntersectAll<[HTMLAttributes<MathMLElement>]> {
	/** Bound DOM node (`bind:element`). */
	element?: MathMLElement | null;
}
