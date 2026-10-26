import { ManagerLocaleContext } from '$stylist/localization/class/manager/locale-context';

/**
 * Locale-aware formatters of the nearest LocaleProvider: dates in its time zone, numbers,
 * money in minor units (kopecks, cents) in its currency and relative time. Call during
 * init, use in markup: values follow locale changes.
 */
export function useFormat() {
	const context = ManagerLocaleContext.get();
	const tag = () => {
		try {
			return Intl.getCanonicalLocales(context.locale)[0] ?? 'en';
		} catch {
			return 'en';
		}
	};
	return {
		date: (
			value: Date | number | string,
			options: Intl.DateTimeFormatOptions = { dateStyle: 'medium' }
		) =>
			new Intl.DateTimeFormat(tag(), { timeZone: context.timeZone, ...options }).format(
				new Date(value)
			),
		number: (value: number, options?: Intl.NumberFormatOptions) =>
			new Intl.NumberFormat(tag(), options).format(value),
		money: (
			minor: number | null | undefined,
			minorUnit = 2,
			currency = context.currency ?? 'USD'
		) => {
			const value = (minor ?? 0) / 10 ** minorUnit;
			try {
				return new Intl.NumberFormat(tag(), {
					style: 'currency',
					currency,
					maximumFractionDigits: minorUnit
				}).format(value);
			} catch {
				return `${new Intl.NumberFormat(tag()).format(value)} ${currency}`;
			}
		},
		relative: (value: number, unit: Intl.RelativeTimeFormatUnit) =>
			new Intl.RelativeTimeFormat(tag(), { numeric: 'auto' }).format(value, unit)
	};
}
