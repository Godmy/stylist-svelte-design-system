import type { SVGAttributes } from 'svelte/elements';

/** `<svg>`: SVG root. */
export interface RecipeHtmlSvg extends SVGAttributes<SVGSVGElement> {
	/** Bound DOM node (`bind:element`). */
	element?: SVGSVGElement | null;
}
