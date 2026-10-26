import { LOCALIZATION_LOCALE_REQUIRED } from '$stylist/localization/const/array/locale-required';
import type { LocaleCode } from '$stylist/localization/type/alias/locale-code';
import type { MessageCatalog } from '$stylist/localization/type/object/message-catalog';

/**
 * Gaps of a catalog: `<locale>.<key>` for every `en` key missing in a required locale, empty
 * texts in any locale and plural forms without `other`. An empty array means complete.
 */
export function checkMessageCatalog(
	catalog: MessageCatalog,
	required: readonly LocaleCode[] = LOCALIZATION_LOCALE_REQUIRED
): string[] {
	const gaps: string[] = [];
	for (const locale of new Set([...required, ...Object.keys(catalog)])) {
		const messages = catalog[locale];
		for (const key of Object.keys(catalog.en)) {
			const value = messages?.[key];
			if (value === undefined) {
				if (required.includes(locale)) gaps.push(`${locale}.${key}`);
			} else if (typeof value === 'string' ? !value.trim() : !value.other?.trim())
				gaps.push(`${locale}.${key}`);
		}
	}
	return gaps;
}
