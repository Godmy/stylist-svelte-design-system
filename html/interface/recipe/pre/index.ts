import type { HTMLAttributes } from 'svelte/elements';

/** `<pre>`: Block of preformatted text. */
export interface RecipeHtmlPre extends HTMLAttributes<HTMLPreElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLPreElement | null;
}
