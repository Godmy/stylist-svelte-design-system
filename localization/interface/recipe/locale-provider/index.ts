import type { Snippet } from 'svelte';
import type { LocaleCode } from '$stylist/localization/type/alias/locale-code';
import type { MessageValue } from '$stylist/localization/type/alias/message-value';

/** Provides the language of every component below it, like ThemeProvider provides the theme. */
export interface RecipeLocaleProvider {
	/** Current language; the site chooses it (URL, cookie, storage). Defaults to `en`. */
	locale?: LocaleCode;
	/** Language for keys missing in `locale`. Defaults to `en`. */
	fallback?: LocaleCode;
	/** IANA time zone for dates, e.g. `Europe/Moscow`. */
	timeZone?: string;
	/** ISO 4217 currency for money, e.g. `RUB`. */
	currency?: string;
	/** Site overrides by `<namespace>.<key>`, e.g. `{ 'pager.next': 'Дальше' }`. */
	messages?: Record<string, MessageValue>;
	/** Also set `lang` and `dir` on `<html>` (one provider per page should do it). */
	document?: boolean;
	class?: string;
	children?: Snippet;
}
