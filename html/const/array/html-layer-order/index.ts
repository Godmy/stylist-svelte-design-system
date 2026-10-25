/**
 * Cascade layers of the visual design-system domains, weakest first. Every component
 * stylesheet and the html skin start with `@layer <this list>;`, so the order holds whichever
 * stylesheet the page loads first.
 */
export const HTML_LAYER_ORDER = [
	'html',
	'typography',
	'svg',
	'mathml',
	'layout',
	'theme',
	'localization'
] as const;
