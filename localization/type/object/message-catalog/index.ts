import type { LocaleCode } from '$stylist/localization/type/alias/locale-code';
import type { MessageValue } from '$stylist/localization/type/alias/message-value';

/**
 * Messages of one component family by locale. `en` is complete (it is the fallback);
 * other locales may be partial and fall back key by key.
 */
export type MessageCatalog<TKey extends string = string> = {
	en: Record<TKey, MessageValue>;
	[locale: LocaleCode]: Partial<Record<TKey, MessageValue>>;
};
