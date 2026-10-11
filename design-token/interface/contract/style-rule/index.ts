/** Data boundary for a stylesheet consumer; independent of HTML and theme runtime. */
export interface ContractDesignTokenStyleRule {
	target: string | readonly string[];
	state?: string;
	pseudo?: string;
	media?: string;
	declarations: Readonly<Record<string, string>>;
}
