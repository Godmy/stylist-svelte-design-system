import type { HtmlContent } from '../../alias/html-content';
import type { HtmlLevel } from '../../alias/html-level';
import type { HtmlNamespace } from '../../alias/html-namespace';
import type { HtmlRender } from '../../alias/html-render';

/**
 * Registry entry of one element. Tokens in `parents`/`accepts` are tag names or
 * `#category` (`#flow`, `#phrasing`, `#text`, `#transparent`, `#any`, ...).
 */
export type HtmlElementSpec = {
	/** Normative element definition linked from the WHATWG index. */
	readonly source: string;
	/** Index verification does not claim complete normative validation. */
	readonly verification: 'index-verified' | 'partial-model';
	readonly description: string;
	readonly namespace: HtmlNamespace;
	readonly level: HtmlLevel;
	readonly content: HtmlContent;
	readonly render: HtmlRender;
	readonly categories: readonly string[];
	readonly parents: readonly string[];
	readonly accepts: readonly string[];
	/** Child that must come first when present. */
	readonly first?: string;
	/** Children (tags or `#category`) that must be present. */
	readonly required?: readonly string[];
	/** The spec adds conditions that the tokens do not express. */
	readonly restricted: boolean;
	readonly attributes: readonly string[];
	readonly domInterface: string;
};
