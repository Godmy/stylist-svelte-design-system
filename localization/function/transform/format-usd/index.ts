/** US dollars from cents without trailing zero cents; `empty` when there is no amount. */
export function formatUsd(cents: number | null | undefined, locale = 'ru-RU', empty = '—'): string {
	if (cents === null || cents === undefined) return empty;
	return new Intl.NumberFormat(locale, {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 0,
		maximumFractionDigits: 2
	}).format(cents / 100);
}
