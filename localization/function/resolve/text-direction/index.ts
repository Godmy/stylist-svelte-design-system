import { LOCALIZATION_LOCALE_RTL } from '$stylist/localization/const/array/locale-rtl';
import type { LocaleCode } from '$stylist/localization/type/alias/locale-code';
import type { TextDirection } from '$stylist/localization/type/alias/text-direction';

/** Script direction of a locale: Intl text info where the runtime has it, else the RTL list. */
export function resolveTextDirection(locale: LocaleCode): TextDirection {
	try {
		const tag = new Intl.Locale(locale) as Intl.Locale & {
			getTextInfo?: () => { direction?: string };
			textInfo?: { direction?: string };
		};
		const direction = tag.getTextInfo?.().direction ?? tag.textInfo?.direction;
		if (direction === 'rtl' || direction === 'ltr') return direction;
		return (LOCALIZATION_LOCALE_RTL as readonly string[]).includes(tag.language) ? 'rtl' : 'ltr';
	} catch {
		return 'ltr';
	}
}
