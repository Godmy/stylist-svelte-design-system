import type { HtmlAttributeValue } from '../../alias/html-attribute-value';
import type { HtmlTag } from '../../alias/html-tag';
import type { HtmlTextNode } from '../html-text-node';

/** Composite of the HTML tree: an element, its attributes and ordered children. */
export type HtmlElementNode = {
	kind: 'element';
	tag: HtmlTag;
	/** Stable id shared by the editor tree and the preview (`data-html-node`). */
	id?: string;
	attrs?: Record<string, HtmlAttributeValue>;
	children?: (HtmlElementNode | HtmlTextNode)[];
};
