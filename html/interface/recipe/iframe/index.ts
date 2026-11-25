import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLIframeAttributes } from 'svelte/elements';

/** `<iframe>`: Child navigable. */
export interface RecipeHtmlIframe extends ComputeIntersectAll<
	[Omit<HTMLIframeAttributes, 'children'>]
> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLIFrameElement | null;
}
