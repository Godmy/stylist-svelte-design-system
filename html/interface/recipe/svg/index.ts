import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SVGAttributes } from 'svelte/elements';

/** `<svg>`: SVG root. */
export interface RecipeHtmlSvg extends ComputeIntersectAll<[SVGAttributes<SVGSVGElement>]> {
	/** Bound DOM node (`bind:element`). */
	element?: SVGSVGElement | null;
}
