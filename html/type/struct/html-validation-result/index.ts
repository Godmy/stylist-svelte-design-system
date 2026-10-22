import type { HtmlNodeIssue } from '$stylist/html/type/struct/html-node-issue';

/** Explicitly separates known errors from conditions that require further verification. */
export type HtmlValidationResult = {
	status: 'invalid' | 'unchecked';
	issues: HtmlNodeIssue[];
	pending: { path: number[]; source: string; reason: string }[];
};
