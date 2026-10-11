import type { ContractDesignTokenStyleRule } from '../../../interface/contract/style-rule';
import type { DesignTokenUsage } from '../../../type/struct/usage';

/** Extracts references (including nested fallbacks), preserving selector and state evidence. */
export function resolveStyleTokenUsage(
	rules: readonly ContractDesignTokenStyleRule[]
): DesignTokenUsage[] {
	return rules.flatMap((rule, index) =>
		Object.entries(rule.declarations).flatMap(([property, value]) =>
			[...value.matchAll(/var\(\s*(--(?:[\w.-]|\\\.)+)/g)].map((match) => ({
				name: match[1].replaceAll('\\.', '.'),
				rule: index,
				targets: typeof rule.target === 'string' ? [rule.target] : [...rule.target],
				state: rule.state,
				pseudo: rule.pseudo,
				media: rule.media,
				property,
				value
			}))
		)
	);
}
