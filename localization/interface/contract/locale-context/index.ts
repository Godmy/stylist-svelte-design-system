import type { LocaleCode } from '$stylist/localization/type/alias/locale-code';
import type { MessageValue } from '$stylist/localization/type/alias/message-value';
import type { TextDirection } from '$stylist/localization/type/alias/text-direction';

/**
 * Language settings shared by LocaleProvider with every component below it.
 * Fields are getters over provider state, so reading them inside markup re-renders on change.
 */
export interface ContractLocaleContext {
	readonly locale: LocaleCode;
	readonly fallback: LocaleCode;
	readonly dir: TextDirection;
	/** IANA time zone for dates; the runtime zone when undefined. */
	readonly timeZone: string | undefined;
	/** ISO 4217 currency for money; formatters default to it. */
	readonly currency: string | undefined;
	/** Site overrides by `<namespace>.<key>`, checked before component catalogs. */
	readonly messages: Readonly<Record<string, MessageValue>>;
}
