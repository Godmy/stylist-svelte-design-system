import LocaleSwitcher from '$stylist/localization/component/organism/locale-switcher/index.svelte';
import type { RecipeLocaleSwitcher } from '$stylist/localization/interface/recipe/locale-switcher';
import type { ContractStory } from '$stylist/html/interface/contract/story';

const LOCALES = [
	{ code: 'en-US', name: 'English', region: 'United States', flag: 'US' },
	{ code: 'ru-RU', name: 'Русский', region: 'Россия', flag: 'RU' },
	{ code: 'de-DE', name: 'Deutsch', region: 'Deutschland', flag: 'DE' },
	{ code: 'ja-JP', name: '日本語', region: '日本', flag: 'JP' },
	{ code: 'ar-SA', name: 'العربية', region: 'السعودية', flag: 'SA' },
	{ code: 'he-IL', name: 'עברית', region: 'ישראל', flag: 'IL' }
];

const ZONES = [
	{ value: 'America/New_York', label: 'New York (UTC−5)' },
	{ value: 'Europe/London', label: 'London (UTC+0)' },
	{ value: 'Europe/Moscow', label: 'Moscow (UTC+3)' },
	{ value: 'Asia/Riyadh', label: 'Riyadh (UTC+3)' },
	{ value: 'Asia/Jerusalem', label: 'Jerusalem (UTC+2)' },
	{ value: 'Asia/Tokyo', label: 'Tokyo (UTC+9)' }
];

/** Locale and time zone switcher with a preview of the selected locale's formats. */
export default {
	component: LocaleSwitcher,
	title: 'LocaleSwitcher',
	description:
		'Locale and time zone switcher. The preview formats dates in the selected locale and zone; headings, labels and the plural count follow the interface language (Language setting of the panel).',
	args: {
		locales: LOCALES,
		currentLocale: 'en-US',
		timezoneOptions: ZONES,
		currentTimezone: 'America/New_York',
		showRegional: true,
		showDatePreview: true,
		showTimePreview: true
	},
	controls: {
		locales: {
			type: 'json',
			label: 'Locales',
			description: 'List of { code, name, region?, flag? }; flag is a country code or an emoji.',
			example: [{ code: 'en-US', name: 'English', region: 'United States', flag: 'US' }]
		},
		currentLocale: {
			type: 'select',
			label: 'Current locale',
			description: 'Selected locale; the preview formats dates in it.',
			options: LOCALES.map((locale) => locale.code)
		},
		timezoneOptions: {
			type: 'json',
			label: 'Time zones',
			description: 'List of { value, label } with IANA zones; empty hides the select.',
			example: [{ value: 'Europe/Moscow', label: 'Moscow (UTC+3)' }]
		},
		currentTimezone: {
			type: 'select',
			label: 'Current time zone',
			description: 'IANA zone of the preview.',
			options: ZONES.map((zone) => zone.value)
		},
		showRegional: {
			type: 'boolean',
			label: 'Regions',
			description: 'Region under the locale name.'
		},
		showDatePreview: {
			type: 'boolean',
			label: 'Date preview',
			description: 'Full date row of the preview.'
		},
		showTimePreview: {
			type: 'boolean',
			label: 'Time preview',
			description: 'Time row of the preview.'
		},
		class: { type: 'text', label: 'Class', description: 'Extra classes on the root.' },
		headerClass: {
			type: 'text',
			label: 'Header class',
			description: 'Extra classes on the header.'
		},
		contentClass: {
			type: 'text',
			label: 'Content class',
			description: 'Extra classes on the content grid.'
		},
		localeClass: {
			type: 'text',
			label: 'Locale class',
			description: 'Extra classes on every locale button.'
		},
		footerClass: {
			type: 'text',
			label: 'Footer class',
			description: 'Extra classes on the footer.'
		}
	},
	presets: {
		Russian: { currentLocale: 'ru-RU', currentTimezone: 'Europe/Moscow' },
		Arabic: { currentLocale: 'ar-SA', currentTimezone: 'Asia/Riyadh' },
		Hebrew: { currentLocale: 'he-IL', currentTimezone: 'Asia/Jerusalem' },
		Japanese: { currentLocale: 'ja-JP', currentTimezone: 'Asia/Tokyo' },
		'Without previews': { showDatePreview: false, showTimePreview: false, showRegional: false },
		'Without time zones': { timezoneOptions: [] },
		'One locale': { locales: [LOCALES[0]!] }
	}
} satisfies ContractStory<RecipeLocaleSwitcher>;
