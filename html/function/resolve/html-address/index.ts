import { HTML_ELEMENT } from '../../../const/record/html-element';
import { HTML_INPUT_TYPE } from '../../../const/array/html-input-type';
import type { HtmlTag } from '../../../type/alias/html-tag';

/** Logical component address of an element (`html/component/atom/input-checkbox`). */
export function resolveHtmlAddress(tag: HtmlTag, trait?: string): string {
	const family =
		tag === 'input' && trait && (HTML_INPUT_TYPE as readonly string[]).includes(trait)
			? `input-${trait}`
			: tag;
	return `html/component/${HTML_ELEMENT[tag].level}/${family}`;
}
