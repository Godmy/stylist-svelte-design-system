import { LOCALIZATION_LOCALE_FALLBACK } from '$stylist/localization/const/value/locale-fallback';
import type { LocaleCode } from '$stylist/localization/type/alias/locale-code';
import type { LocalizedText } from '$stylist/localization/type/object/localized-text';

/** Content for a locale: exact tag → its language → fallback → `en`; plain strings pass through. */
export function pickLocalized(
	text: LocalizedText | string,
	locale: LocaleCode,
	fallback: LocaleCode = LOCALIZATION_LOCALE_FALLBACK
): string {
	if (typeof text === 'string') return text;
	return text[locale] || text[locale.split('-')[0]!] || text[fallback] || text.en;
}
