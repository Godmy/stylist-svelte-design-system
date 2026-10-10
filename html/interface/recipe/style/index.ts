import type { HTMLStyleAttributes } from 'svelte/elements';
import type { SlotHtmlText } from '../../slot/html-text';

/** `<style>`: Embedded styling information. */
export interface RecipeHtmlStyle extends Omit<HTMLStyleAttributes, 'children'>, SlotHtmlText {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLStyleElement | null;
}
