import type { ContractDesignTokenStyleRule } from '$stylist/design-token/interface/contract/style-rule';
import { resolveStyleTokenUsage } from '$stylist/design-token/function/resolve/style-token-usage';

/** Audits emitted names; CSS fallbacks never count as an emitted design token. */
export function checkStyleTokenCoverage(
	rules: readonly ContractDesignTokenStyleRule[],
	variables: Readonly<Record<string, string | number>>
): { required: string[]; emitted: string[]; missing: string[] } {
	const required = [...new Set(resolveStyleTokenUsage(rules).map((usage) => usage.name))].sort();
	const available = new Set(Object.keys(variables).map((name) => name.replaceAll('\\.', '.')));
	return {
		required,
		emitted: required.filter((name) => available.has(name)),
		missing: required.filter((name) => !available.has(name))
	};
}
