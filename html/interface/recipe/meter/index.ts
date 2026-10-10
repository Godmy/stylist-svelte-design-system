import type { HTMLMeterAttributes } from 'svelte/elements';

/** `<meter>`: Gauge. */
export interface RecipeHtmlMeter extends HTMLMeterAttributes {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLMeterElement | null;
}
