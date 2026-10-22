import { HTML_ELEMENT } from '$stylist/html/const/record/html-element';
import { HTML_INPUT_TYPE } from '$stylist/html/const/array/html-input-type';
import type { HtmlTag } from '$stylist/html/type/alias/html-tag';
import type { ContractHtmlComponent } from '$stylist/html/interface/contract/html-component';
import type { ContractHtmlComposite } from '$stylist/html/interface/contract/html-composite';
import { createHtmlBlock } from '$stylist/html/function/create/html-block';

/** Full Scratch palette of the html domain: every element plus every `input` trait. */
export function createHtmlBlockList(): (ContractHtmlComponent | ContractHtmlComposite)[] {
	const tags = Object.keys(HTML_ELEMENT) as HtmlTag[];
	return [
		...tags.map((tag) => createHtmlBlock(tag)),
		...HTML_INPUT_TYPE.map((type) => createHtmlBlock('input', type))
	];
}
