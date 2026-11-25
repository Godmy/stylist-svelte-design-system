import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLHtmlAttributes } from 'svelte/elements';

/** `<html>`: Root element. */
export interface RecipeHtmlHtml extends ComputeIntersectAll<[HTMLHtmlAttributes]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLHtmlElement | null;
}
