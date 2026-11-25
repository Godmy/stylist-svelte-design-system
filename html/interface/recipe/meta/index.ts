import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLMetaAttributes } from 'svelte/elements';

/** `<meta>`: Text metadata. */
export interface RecipeHtmlMeta extends ComputeIntersectAll<
	[Omit<HTMLMetaAttributes, 'children'>]
> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLMetaElement | null;
}
