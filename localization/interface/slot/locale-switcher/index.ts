import type { SlotLocaleSwitcherLocale } from '$stylist/localization/interface/slot/locale-switcher-locale';
export interface SlotLocaleSwitcher {
	/** Locales to choose from; `flag` is a country code or an emoji. */
	locales: SlotLocaleSwitcherLocale[];
	/** BCP 47 code of the selected locale; the preview formats dates in it. */
	currentLocale: string;
	onLocaleChange?: (localeCode: string) => void;
	/** Time zones of the select; without them the select is hidden. */
	timezoneOptions?: {
		value: string;
		label: string;
	}[];
	/** IANA zone of the preview; else the provider's zone, else the browser's. */
	currentTimezone?: string;
	onTimezoneChange?: (timezone: string) => void;
	/** Region under the locale name (default true). */
	showRegional?: boolean;
	/** Full date row of the preview (default true). */
	showDatePreview?: boolean;
	/** Time row of the preview (default true). */
	showTimePreview?: boolean;
	class?: string;
	headerClass?: string;
	contentClass?: string;
	localeClass?: string;
	footerClass?: string;
}
