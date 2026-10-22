import type { HtmlElementNode } from '$stylist/html/type/struct/html-element-node';

/** Ancestors before the current parent, from the root outwards. */
export type HtmlValidationContext = {
	ancestors?: readonly HtmlElementNode[];
};
