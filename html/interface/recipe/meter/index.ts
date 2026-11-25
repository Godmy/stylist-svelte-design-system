import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLMeterAttributes } from 'svelte/elements';

/** `<meter>`: Gauge. */
export interface RecipeHtmlMeter extends ComputeIntersectAll<[HTMLMeterAttributes]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLMeterElement | null;
}
