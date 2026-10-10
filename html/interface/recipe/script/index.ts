import type { HTMLScriptAttributes } from 'svelte/elements';
import type { SlotHtmlText } from '../../slot/html-text';

/** `<script>`: Embedded script. */
export interface RecipeHtmlScript extends Omit<HTMLScriptAttributes, 'children'>, SlotHtmlText {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLScriptElement | null;
}
