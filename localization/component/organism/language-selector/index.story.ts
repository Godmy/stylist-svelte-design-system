import LanguageSelector from '$stylist/localization/component/organism/language-selector/index.svelte';
import type { RecipeLanguageSelector } from '$stylist/localization/interface/recipe/language-selector';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_COLOR_TONE } from '$stylist/design-token/const/array/color-tone';
import { TOKEN_SIZE } from '$stylist/design-token/const/array/size';

const LANGUAGES = [
	{ code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
	{ code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
	{ code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
	{ code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
	{ code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
	{ code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
	{ code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
	{ code: 'he', name: 'Hebrew', nativeName: 'עברית', flag: '🇮🇱' }
];

/** Dropdown of languages with search, flags and native names; its own texts follow the interface language. */
export default {
	component: LanguageSelector,
	title: 'LanguageSelector',
	description:
		'Language dropdown with search, flags and native names. Its placeholder, search, empty state and plural count come from the catalog: switch the Language setting of the panel (ru, ar, he are right-to-left aware).',
	args: {
		languages: LANGUAGES,
		currentLanguage: 'en',
		showFlags: true,
		showNativeName: false,
		searchable: true,
		dropdownPlacement: 'bottom',
		variant: 'default',
		size: 'md'
	},
	controls: {
		languages: {
			type: 'json',
			label: 'Languages',
			description:
				'List of { code, name, nativeName?, flag? }; flag is an emoji or a country code.',
			example: [{ code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' }]
		},
		currentLanguage: {
			type: 'select',
			label: 'Current language',
			description: 'Code of the selected language; empty shows the placeholder.',
			options: LANGUAGES.map((language) => language.code)
		},
		showFlags: { type: 'boolean', label: 'Flags', description: 'Flags before the names.' },
		showNativeName: {
			type: 'boolean',
			label: 'Native names',
			description: 'Native name after the name when they differ.'
		},
		searchable: { type: 'boolean', label: 'Search', description: 'Search field above the list.' },
		dropdownPlacement: {
			type: 'select',
			label: 'Placement',
			description: 'List below or above the button.',
			options: ['bottom', 'top']
		},
		variant: {
			type: 'select',
			label: 'Accent',
			description: 'Tone of focus, the selected language and its check mark.',
			options: TOKEN_COLOR_TONE
		},
		size: {
			type: 'select',
			label: 'Size',
			description: 'Scale of the button and the list.',
			options: TOKEN_SIZE.slice(1, 4)
		},
		class: { type: 'text', label: 'Class', description: 'Extra classes on the root.' },
		buttonClass: {
			type: 'text',
			label: 'Button class',
			description: 'Extra classes on the button.'
		},
		dropdownClass: {
			type: 'text',
			label: 'Dropdown class',
			description: 'Extra classes on the list panel.'
		},
		languageClass: {
			type: 'text',
			label: 'Language class',
			description: 'Extra classes on every language button.'
		}
	},
	presets: {
		Russian: { currentLanguage: 'ru', showNativeName: true },
		Arabic: { currentLanguage: 'ar', showNativeName: true },
		Hebrew: { currentLanguage: 'he', showNativeName: true, variant: 'success' },
		'No selection': { currentLanguage: undefined },
		'Small, without flags': { size: 'sm', showFlags: false, variant: 'neutral' },
		'Large, above': { size: 'lg', dropdownPlacement: 'top', searchable: false },
		'Empty list': { languages: [] }
	}
} satisfies ContractStory<RecipeLanguageSelector>;
