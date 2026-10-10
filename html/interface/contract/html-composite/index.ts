import type { HtmlContent } from '../../../type/alias/html-content';
import type { ContractHtmlComponent } from '../html-component';

/** Composite pattern, Composite role: an HTML block with a children slot. */
export interface ContractHtmlComposite extends ContractHtmlComponent {
	content: HtmlContent;
	/** Allowed child tokens (tags or `#category`). */
	accepts: readonly string[];
	first?: string;
	required?: readonly string[];
	/** The spec adds conditions that `accepts` does not express. */
	restricted: boolean;
}
