/**
 * Elements that are interactive content only under a condition (WHATWG content
 * categories): the selector suffix that makes them interactive.
 */
export const HTML_INTERACTIVE_CONDITION = {
	a: '[href]',
	audio: '[controls]',
	video: '[controls]',
	img: '[usemap]',
	input: ':not([type="hidden"])',
	object: '[usemap]'
} as const;
