import { formatDate } from '$stylist/localization/function/transform/format-date';
import { formatTime } from '$stylist/localization/function/transform/format-time';
import { formatDateTime } from '$stylist/localization/function/transform/format-date-time';
import type { ContractLocaleContext } from '$stylist/localization/interface/contract/locale-context';
import type { RecipeLocaleSwitcher } from '$stylist/localization/interface/recipe/locale-switcher';

const canonical = (code: string | undefined) => {
	try {
		return code ? Intl.getCanonicalLocales(code)[0] : undefined;
	} catch {
		return undefined;
	}
};

const validZone = (zone: string | undefined) => {
	try {
		return zone
			? new Intl.DateTimeFormat('en', { timeZone: zone }).resolvedOptions().timeZone
			: undefined;
	} catch {
		return undefined;
	}
};

/**
 * The preview formats dates in the SELECTED locale and time zone (that is what it previews),
 * not in the interface language; an invalid code or zone falls back to the provider's.
 */
export function createLocaleSwitcherState(
	getProps: () => Omit<RecipeLocaleSwitcher, 'onLocaleChange' | 'onTimezoneChange'>,
	context: ContractLocaleContext
) {
	const props = $derived(getProps());
	const locales = $derived(props.locales ?? []);
	const currentLocale = $derived(props.currentLocale);
	const timezoneOptions = $derived(props.timezoneOptions ?? []);
	const currentTimezone = $derived(
		validZone(props.currentTimezone) ??
			validZone(context.timeZone) ??
			Intl.DateTimeFormat().resolvedOptions().timeZone
	);
	const previewLocale = $derived(canonical(currentLocale) ?? canonical(context.locale) ?? 'en');
	const showRegional = $derived(props.showRegional ?? true);
	const showDatePreview = $derived(props.showDatePreview ?? true);
	const showTimePreview = $derived(props.showTimePreview ?? true);

	// One fixed moment of the preview; it is never mutated.
	// eslint-disable-next-line svelte/prefer-svelte-reactivity
	const now = new Date();
	const currentLocaleObj = $derived(
		locales.find((locale) => locale.code === currentLocale) ?? locales[0]
	);
	const date = $derived(formatDate(now, previewLocale, currentTimezone));
	const time = $derived(formatTime(now, previewLocale, currentTimezone));
	const dateTime = $derived(formatDateTime(now, previewLocale, currentTimezone));

	const restProps = $derived.by(() => {
		const {
			class: _class,
			locales: _locales,
			currentLocale: _currentLocale,
			timezoneOptions: _timezoneOptions,
			currentTimezone: _currentTimezone,
			showRegional: _showRegional,
			showDatePreview: _showDatePreview,
			showTimePreview: _showTimePreview,
			headerClass: _headerClass,
			contentClass: _contentClass,
			localeClass: _localeClass,
			footerClass: _footerClass,
			...rest
		} = props;
		return rest;
	});

	return {
		get locales() {
			return locales;
		},
		get currentLocale() {
			return currentLocale;
		},
		get currentLocaleObj() {
			return currentLocaleObj;
		},
		get previewLocale() {
			return previewLocale;
		},
		get timezoneOptions() {
			return timezoneOptions;
		},
		get currentTimezone() {
			return currentTimezone;
		},
		get showRegional() {
			return showRegional;
		},
		get showDatePreview() {
			return showDatePreview;
		},
		get showTimePreview() {
			return showTimePreview;
		},
		get date() {
			return date;
		},
		get time() {
			return time;
		},
		get dateTime() {
			return dateTime;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createLocaleSwitcherState;
