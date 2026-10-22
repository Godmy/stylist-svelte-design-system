import type { HtmlElementNode } from '$stylist/html/type/struct/html-element-node';
import type { HtmlOutletNode } from '$stylist/html/type/struct/html-outlet-node';
import type { HtmlTextNode } from '$stylist/html/type/struct/html-text-node';

/** Component of the HTML composite: text, an element with children or an outlet. */
export type HtmlNode = HtmlElementNode | HtmlTextNode | HtmlOutletNode;
