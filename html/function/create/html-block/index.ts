import { HTML_ELEMENT } from '$stylist/html/const/record/html-element';
import type { HtmlTag } from '$stylist/html/type/alias/html-tag';
import type { HtmlElementSpec } from '$stylist/html/type/struct/html-element-spec';
import type { ContractHtmlComponent } from '$stylist/html/interface/contract/html-component';
import type { ContractHtmlComposite } from '$stylist/html/interface/contract/html-composite';
import { resolveHtmlAddress } from '$stylist/html/function/resolve/html-address';

/**
 * Scratch block of one element (or of an `input` trait): a leaf
 * `ContractHtmlComponent` or a `ContractHtmlComposite` with a children slot.
 */
export function createHtmlBlock(
	tag: HtmlTag,
	trait?: string
): ContractHtmlComponent | ContractHtmlComposite {
	const spec: HtmlElementSpec = HTML_ELEMENT[tag];
	const use = resolveHtmlAddress(tag, trait);
	const family = use.slice(use.lastIndexOf('/') + 1);
	const text = spec.content === 'raw-text' || spec.content === 'text';
	const leaf = spec.content === 'empty' || text;
	const component: ContractHtmlComponent = {
		use,
		tag,
		trait: family === tag ? undefined : trait,
		name:
			'Html' +
			family
				.split('-')
				.map((part) => part[0].toUpperCase() + part.slice(1))
				.join(''),
		level: spec.level,
		source: spec.source,
		verification: spec.verification,
		namespace: spec.namespace,
		shape: tag === 'html' ? 'hat' : leaf ? 'stack' : 'c-block',
		parents: spec.parents,
		attributes: spec.attributes,
		fixed: family === tag ? undefined : { type: trait as string }
	};
	if (spec.content === 'empty') return component;
	return {
		...component,
		content: spec.content,
		accepts: spec.accepts,
		first: spec.first,
		required: spec.required,
		restricted: spec.restricted
	};
}
