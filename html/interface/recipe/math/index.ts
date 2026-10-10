import type { HTMLAttributes } from 'svelte/elements';

/** `<math>`: MathML root. */
export interface RecipeHtmlMath extends HTMLAttributes<MathMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: MathMLElement | null;
}
