import type { HtmlIssueCode } from '$stylist/html/type/alias/html-issue-code';

/** Composition problem found in an HTML tree. */
export type HtmlNodeIssue = {
	code: HtmlIssueCode;
	/** Child indexes from the root to the offending node. */
	path: number[];
	tag?: string;
	message: string;
};
