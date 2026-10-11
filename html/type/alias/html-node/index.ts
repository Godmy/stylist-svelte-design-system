import type { HtmlElementNode } from '../../struct/html-element-node';
import type { HtmlOutletNode } from '../../struct/html-outlet-node';
import type { HtmlTextNode } from '../../struct/html-text-node';

/** Component of the HTML composite: text, an element with children or an outlet. */
export type HtmlNode = HtmlElementNode | HtmlTextNode | HtmlOutletNode;
