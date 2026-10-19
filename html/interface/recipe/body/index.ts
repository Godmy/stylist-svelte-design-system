import type { HTMLAttributes } from 'svelte/elements';

/** `<body>`: Document body. */
export interface RecipeHtmlBody
	extends
		Omit<
			HTMLAttributes<HTMLBodyElement>,
			| keyof WindowEventHandlers
			| 'onblur'
			| 'onerror'
			| 'onfocus'
			| 'onload'
			| 'onresize'
			| 'onscroll'
		>,
		Partial<WindowEventHandlers>,
		Partial<Pick<Window, 'onblur' | 'onerror' | 'onfocus' | 'onload' | 'onresize' | 'onscroll'>> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLBodyElement | null;
}
