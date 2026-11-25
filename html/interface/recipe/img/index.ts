import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLImgAttributes } from 'svelte/elements';

/** `<img>`: Image. */
export interface RecipeHtmlImg extends ComputeIntersectAll<[Omit<HTMLImgAttributes, 'children'>]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLImageElement | null;
}
