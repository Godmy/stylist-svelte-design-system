import type { LocaleCode } from '$stylist/localization/type/alias/locale-code';

/** Content in several languages, chosen with pickLocalized; `en` is the fallback. */
export type LocalizedText = { en: string; [locale: LocaleCode]: string };
