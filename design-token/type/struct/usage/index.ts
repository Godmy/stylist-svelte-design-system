/** One custom-property reference in a consumer's declaration. */
export type DesignTokenUsage = {
	name: string;
	rule: number;
	targets: readonly string[];
	state?: string;
	pseudo?: string;
	media?: string;
	property: string;
	value: string;
};
