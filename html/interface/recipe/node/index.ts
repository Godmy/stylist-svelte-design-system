import type { Snippet } from 'svelte';
import type { HtmlNode } from '$stylist/html/type/alias/html-node';

/** Recursive renderer of an HTML composite tree through the html components. */
export interface RecipeHtmlNode {
	node: HtmlNode;
	/** Rendered in place of the tree's outlet node; passed down the recursion. */
	outlet?: Snippet;
}
