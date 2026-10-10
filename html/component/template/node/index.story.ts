import HtmlNodeRenderer from './index.svelte';
import type { RecipeHtmlNode } from '../../../interface/recipe/node';
import type { HtmlNode } from '../../../type/alias/html-node';
import type { ContractStory } from '$stylist/domain/interface/contract/story';
import sample from '../../../data/json/html-node-sample/index.json';

/** Composite renderer: one HtmlNode tree, every element rendered by its html component. */
export default {
	component: HtmlNodeRenderer,
	args: { node: sample as HtmlNode },
	presets: {
		// <div> inside <ul> and <summary> after <p> show the validation panel of the render.
		'Broken composition': {
			node: {
				kind: 'element',
				tag: 'section',
				children: [
					{ kind: 'element', tag: 'ul', children: [{ kind: 'element', tag: 'div' }] },
					{
						kind: 'element',
						tag: 'details',
						children: [
							{ kind: 'element', tag: 'p', children: [{ kind: 'text', value: 'Answer' }] },
							{
								kind: 'element',
								tag: 'summary',
								children: [{ kind: 'text', value: 'Question' }]
							}
						]
					}
				]
			}
		}
	}
} satisfies ContractStory<RecipeHtmlNode>;
