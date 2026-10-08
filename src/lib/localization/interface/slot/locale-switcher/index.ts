import type { SlotLocaleSwitcherLocale } from '$stylist/localization/interface/slot/locale-switcher-locale';
export interface SlotLocaleSwitcher {
	locales: SlotLocaleSwitcherLocale[];
	currentLocale: string;
	onLocaleChange?: (localeCode: string) => void;
	timezoneOptions?: {
		value: string;
		label: string;
	}[];
	currentTimezone?: string;
	onTimezoneChange?: (timezone: string) => void;
	showRegional?: boolean;
	showDatePreview?: boolean;
	showTimePreview?: boolean;
	class?: string;
	headerClass?: string;
	contentClass?: string;
	localeClass?: string;
	footerClass?: string;
}
