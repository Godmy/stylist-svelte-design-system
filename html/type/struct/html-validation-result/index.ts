import type { HtmlNodeIssue } from '../html-node-issue';

/** Explicitly separates known errors from conditions that require further verification. */
export type HtmlValidationResult = {
	status: 'invalid' | 'unchecked';
	issues: HtmlNodeIssue[];
	pending: { path: number[]; source: string; reason: string }[];
};
