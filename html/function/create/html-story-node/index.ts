import { HTML_ELEMENT } from '$stylist/html/const/record/html-element';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import type { HtmlAttributeValue } from '$stylist/html/type/alias/html-attribute-value';
import type { HtmlNode } from '$stylist/html/type/alias/html-node';
import type { HtmlTag } from '$stylist/html/type/alias/html-tag';
import { transformHtmlOutlet } from '$stylist/html/function/transform/html-outlet';

/**
 * Tree of an html story: its element (tag from the component family, scalar args as
 * attributes, content as children) placed into the story context. `null` when the family
 * is not an element. `node` renders its `node` arg; `raw-text` takes the tag from args.
 */
export function createHtmlStoryNode(
	family: string,
	story: ContractStory,
	args: Record<string, unknown> = story.args ?? {},
	content: readonly HtmlNode[] = story.content ?? []
): HtmlNode | null {
	if (family === 'node') return (args.node as HtmlNode | undefined) ?? null;
	const attrs: Record<string, HtmlAttributeValue> = {};
	for (const [name, value] of Object.entries(args))
		if (name !== 'element' && ['string', 'number', 'boolean'].includes(typeof value))
			attrs[name] = value as HtmlAttributeValue;
	let tag = family;
	if (family === 'raw-text') {
		tag = String(attrs.tag);
		delete attrs.tag;
	}
	if (family.startsWith('input-')) {
		tag = 'input';
		attrs.type = family.slice('input-'.length);
	}
	if (!(tag in HTML_ELEMENT)) return null;
	const element: HtmlNode = { kind: 'element', tag: tag as HtmlTag, attrs, children: [...content] };
	return story.context ? (transformHtmlOutlet(story.context, [element])[0] ?? null) : element;
}
