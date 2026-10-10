import type { HTMLIframeAttributes } from 'svelte/elements';

/** `<iframe>`: Child navigable. */
export interface RecipeHtmlIframe extends Omit<HTMLIframeAttributes, 'children'> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLIFrameElement | null;
}
