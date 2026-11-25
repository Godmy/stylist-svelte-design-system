import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLStyleAttributes } from 'svelte/elements';
import type { SlotHtmlText } from '$stylist/html/interface/slot/html-text';

/** `<style>`: Embedded styling information. */
export interface RecipeHtmlStyle extends ComputeIntersectAll<
	[Omit<HTMLStyleAttributes, 'children'>, SlotHtmlText]
> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLStyleElement | null;
}
