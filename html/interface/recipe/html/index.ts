import type { HTMLHtmlAttributes } from 'svelte/elements';

/** `<html>`: Root element. */
export interface RecipeHtmlHtml extends HTMLHtmlAttributes {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLHtmlElement | null;
}
