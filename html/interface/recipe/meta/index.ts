import type { HTMLMetaAttributes } from 'svelte/elements';

/** `<meta>`: Text metadata. */
export interface RecipeHtmlMeta extends Omit<HTMLMetaAttributes, 'children'> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLMetaElement | null;
}
