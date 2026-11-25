import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLAttributes } from 'svelte/elements';

/** `<picture>`: Image. */
export interface RecipeHtmlPicture extends ComputeIntersectAll<
	[HTMLAttributes<HTMLPictureElement>]
> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLPictureElement | null;
}
