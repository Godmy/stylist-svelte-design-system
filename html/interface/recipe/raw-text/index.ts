import type { Snippet } from 'svelte';

/** Internal raw-text renderer; the inert anchor locates the actual DOM element. */
export interface RecipeHtmlRawText {
	tag: 'style' | 'script';
	text?: string;
	element?: HTMLStyleElement | HTMLScriptElement | null;
	children?: Snippet;
	[key: string]: unknown;
}
