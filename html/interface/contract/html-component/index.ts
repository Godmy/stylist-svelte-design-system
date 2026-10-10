import type { HtmlBlockShape } from '../../../type/alias/html-block-shape';
import type { HtmlLevel } from '../../../type/alias/html-level';
import type { HtmlNamespace } from '../../../type/alias/html-namespace';
import type { HtmlTag } from '../../../type/alias/html-tag';

/**
 * Composite pattern, Component role: what every HTML block exposes to an editor
 * (Scratch palette, inspector, codegen). Leaves (void elements) stop here.
 */
export interface ContractHtmlComponent {
	/** Logical address: `html/component/<level>/<family>`. */
	use: string;
	tag: HtmlTag;
	/** Refinement of the family, e.g. `checkbox` for `input-checkbox`. */
	trait?: string;
	/** Exported Svelte component name derived from the family folder. */
	name: string;
	/** Normative element definition and explicit registry verification status. */
	source: string;
	verification: 'index-verified' | 'partial-model';
	level: HtmlLevel;
	namespace: HtmlNamespace;
	shape: HtmlBlockShape;
	/** Allowed parent tokens (tags or `#category`). */
	parents: readonly string[];
	/** Element-specific attributes for the inspector; global attributes are implied. */
	attributes: readonly string[];
	/** Attributes fixed by the trait (`{ type: 'checkbox' }`). */
	fixed?: Readonly<Record<string, string>>;
}
