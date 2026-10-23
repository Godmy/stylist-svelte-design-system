/**
 * Money stored in minor units (kopecks, cents) in the currency's own notation.
 * A missing amount counts as zero; an unknown currency code falls back to «1 234 XYZ».
 */
export function formatMoney(
	minor: number | null | undefined,
	minorUnit = 2,
	currency = 'RUB',
	locale = 'ru-RU'
): string {
	const value = (minor ?? 0) / 10 ** minorUnit;
	try {
		return new Intl.NumberFormat(locale, {
			style: 'currency',
			currency,
			maximumFractionDigits: minorUnit
		}).format(value);
	} catch {
		return `${value.toLocaleString(locale)} ${currency}`;
	}
}
