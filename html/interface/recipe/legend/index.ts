import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLAttributes } from 'svelte/elements';

/** `<legend>`: Caption for fieldset. */
export interface RecipeHtmlLegend extends ComputeIntersectAll<[HTMLAttributes<HTMLLegendElement>]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLLegendElement | null;
}
