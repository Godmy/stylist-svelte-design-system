import type { HtmlAttributeValue } from '$stylist/html/type/alias/html-attribute-value';
import type { HtmlTag } from '$stylist/html/type/alias/html-tag';
import type { HtmlOutletNode } from '$stylist/html/type/struct/html-outlet-node';
import type { HtmlTextNode } from '$stylist/html/type/struct/html-text-node';

/** Composite of the HTML tree: an element, its attributes and ordered children. */
export type HtmlElementNode = {
	kind: 'element';
	tag: HtmlTag;
	/** Stable id shared by the editor tree and the preview (`data-html-node`). */
	id?: string;
	attrs?: Record<string, HtmlAttributeValue>;
	children?: (HtmlElementNode | HtmlTextNode | HtmlOutletNode)[];
};
