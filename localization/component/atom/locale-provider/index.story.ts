import LocaleProvider from '$stylist/localization/component/atom/locale-provider/index.svelte';
import type { RecipeLocaleProvider } from '$stylist/localization/interface/recipe/locale-provider';
import type { ContractStory } from '$stylist/html/interface/contract/story';

const LOCALES = ['en', 'ru', 'ka', 'es', 'zh', 'hi', 'ar', 'he'];

/** index.story.svelte puts LocalePreview inside the provider to show what changes. */
export default {
	component: LocaleProvider,
	title: 'LocaleProvider',
	description:
		'Язык всех компонентов внутри: перевод, множественное число, даты, деньги и направление письма',
	args: {
		locale: 'ru',
		fallback: 'en',
		timeZone: 'Europe/Moscow',
		currency: 'RUB',
		messages: {}
	},
	controls: {
		locale: {
			type: 'select',
			label: 'Locale',
			description: 'Current language (BCP 47); ar and he switch to right-to-left.',
			options: LOCALES
		},
		fallback: {
			type: 'select',
			label: 'Fallback',
			description: 'Language for keys missing in the current one.',
			options: LOCALES
		},
		timeZone: {
			type: 'select',
			label: 'Time zone',
			description: 'IANA zone for dates.',
			options: [
				'Europe/Moscow',
				'Asia/Tbilisi',
				'Europe/Madrid',
				'Asia/Shanghai',
				'Asia/Kolkata',
				'Asia/Dubai',
				'Asia/Jerusalem',
				'UTC'
			]
		},
		currency: {
			type: 'select',
			label: 'Currency',
			description: 'ISO 4217 currency for money.',
			options: ['RUB', 'GEL', 'EUR', 'USD', 'CNY', 'INR', 'AED', 'ILS']
		},
		messages: {
			type: 'json',
			label: 'Messages',
			description: 'Site overrides by <namespace>.<key>, checked before component catalogs.',
			example: { 'locale-preview.next': 'Continue' }
		},
		document: {
			type: 'boolean',
			label: 'Set <html> lang/dir',
			description: 'Mirror lang and dir to the document root.'
		}
	},
	presets: {
		English: { locale: 'en', timeZone: 'UTC', currency: 'USD' },
		Georgian: { locale: 'ka', timeZone: 'Asia/Tbilisi', currency: 'GEL' },
		Spanish: { locale: 'es', timeZone: 'Europe/Madrid', currency: 'EUR' },
		Chinese: { locale: 'zh', timeZone: 'Asia/Shanghai', currency: 'CNY' },
		Hindi: { locale: 'hi', timeZone: 'Asia/Kolkata', currency: 'INR' },
		Arabic: { locale: 'ar', timeZone: 'Asia/Dubai', currency: 'AED' },
		Hebrew: { locale: 'he', timeZone: 'Asia/Jerusalem', currency: 'ILS' },
		'Missing locale falls back': { locale: 'fr', fallback: 'en', currency: 'EUR' },
		'Site override': { locale: 'ru', messages: { 'locale-preview.next': 'Продолжить' } }
	},
	layout: 'padded'
} satisfies ContractStory<RecipeLocaleProvider>;
