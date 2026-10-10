import { serializeHtmlAttributes } from '../html-attributes';
import { checkHtmlRawText } from '../../check/html-raw-text';

/** Trusted raw text. HTML end-tag delimiters must be escaped by the author. */
export function serializeHtmlRawText(
	tag: 'style' | 'script',
	text: string,
	attrs: Record<string, unknown> = {}
): string {
	if (!checkHtmlRawText(tag, text))
		throw new Error(`Raw <${tag}> text contains its HTML closing delimiter`);
	return `<${tag}${serializeHtmlAttributes(attrs)}>${text}</${tag}>`;
}
