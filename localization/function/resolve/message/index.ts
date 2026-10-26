import type { LocaleCode } from '$stylist/localization/type/alias/locale-code';
import type { MessageCatalog } from '$stylist/localization/type/object/message-catalog';
import type { MessageValue } from '$stylist/localization/type/alias/message-value';

/**
 * Text of one message: site override `<namespace>.<key>` → catalog in `locale`, then in its
 * language (`ru-RU` → `ru`) → `fallback` → `en` → the key itself. Plural forms are chosen by
 * `values.count` with Intl.PluralRules; `{name}` placeholders take `values`, numbers are
 * formatted for the locale.
 */
export function resolveMessage<TKey extends string>(options: {
	catalog: MessageCatalog<TKey>;
	key: TKey;
	locale: LocaleCode;
	fallback: LocaleCode;
	namespace?: string;
	overrides?: Readonly<Record<string, MessageValue>>;
	values?: Record<string, string | number>;
}): string {
	const { catalog, key, locale, fallback, namespace, overrides, values } = options;
	const language = locale.split('-')[0]!;
	const candidates: [LocaleCode, MessageValue | undefined][] = [
		[locale, namespace ? overrides?.[`${namespace}.${key}`] : undefined],
		[locale, catalog[locale]?.[key]],
		[language, catalog[language]?.[key]],
		[fallback, catalog[fallback]?.[key]],
		['en', catalog.en[key]]
	];
	const found = candidates.find(([, candidate]) => candidate !== undefined);
	const usedLocale = found?.[0] ?? locale;
	const value: MessageValue = found?.[1] ?? key;
	const canonical = (() => {
		try {
			return Intl.getCanonicalLocales(usedLocale)[0] ?? 'en';
		} catch {
			return 'en';
		}
	})();
	let text: string;
	if (typeof value === 'string') text = value;
	else {
		const category = new Intl.PluralRules(canonical).select(Number(values?.count ?? 0));
		text = value[category] ?? value.other;
	}
	if (!values) return text;
	return text.replace(/\{(\w+)\}/g, (match, name: string) => {
		const replacement = values[name];
		if (replacement === undefined) return match;
		return typeof replacement === 'number'
			? new Intl.NumberFormat(canonical).format(replacement)
			: replacement;
	});
}
