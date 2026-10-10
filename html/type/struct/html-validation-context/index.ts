import type { HtmlElementNode } from '../html-element-node';

/** Ancestors before the current parent, from the root outwards. */
export type HtmlValidationContext = {
	ancestors?: readonly HtmlElementNode[];
};
