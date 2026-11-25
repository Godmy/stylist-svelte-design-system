import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLScriptAttributes } from 'svelte/elements';
import type { SlotHtmlText } from '$stylist/html/interface/slot/html-text';

/** `<script>`: Embedded script. */
export interface RecipeHtmlScript extends ComputeIntersectAll<
	[Omit<HTMLScriptAttributes, 'children'>, SlotHtmlText]
> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLScriptElement | null;
}
