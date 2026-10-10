import { HTML_ELEMENT } from '../../../const/record/html-element';
import { HTML_INPUT_TYPE } from '../../../const/array/html-input-type';
import type { HtmlTag } from '../../../type/alias/html-tag';
import type { ContractHtmlComponent } from '../../../interface/contract/html-component';
import type { ContractHtmlComposite } from '../../../interface/contract/html-composite';
import { createHtmlBlock } from '../html-block';

/** Full Scratch palette of the html domain: every element plus every `input` trait. */
export function createHtmlBlockList(): (ContractHtmlComponent | ContractHtmlComposite)[] {
	const tags = Object.keys(HTML_ELEMENT) as HtmlTag[];
	return [
		...tags.map((tag) => createHtmlBlock(tag)),
		...HTML_INPUT_TYPE.map((type) => createHtmlBlock('input', type))
	];
}
