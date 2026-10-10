import type { HtmlElementNode } from '../../struct/html-element-node';
import type { HtmlTextNode } from '../../struct/html-text-node';

/** Component of the HTML composite: a leaf text node or an element with children. */
export type HtmlNode = HtmlElementNode | HtmlTextNode;
