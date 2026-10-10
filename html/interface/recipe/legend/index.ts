import type { HTMLAttributes } from 'svelte/elements';

/** `<legend>`: Caption for fieldset. */
export interface RecipeHtmlLegend extends HTMLAttributes<HTMLLegendElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLLegendElement | null;
}
