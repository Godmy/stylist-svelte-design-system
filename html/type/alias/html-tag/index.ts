import type { HTML_ELEMENT } from '$stylist/html/const/record/html-element';

/** Name of any element of the HTML Living Standard. */
export type HtmlTag = keyof typeof HTML_ELEMENT;
