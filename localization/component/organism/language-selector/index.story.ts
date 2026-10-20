import LanguageSelector from './index.svelte';
import type { RecipeLanguageSelector } from '$stylist/localization/interface/recipe/language-selector';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_COLOR_TONE } from '$stylist/design-token/const/array/color-tone';
import { TOKEN_SIZE } from '$stylist/design-token/const/array/size';

/** Dropdown of languages with search, flags and native names. */
export default {
	component: LanguageSelector,
	title: 'LanguageSelector',
	description: 'Language selector component with search, flags, and native language names.',
	args: {
		languages: [
			{ code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
			{ code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
			{ code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
			{ code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
			{ code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
			{ code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
			{ code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
			{ code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
			{ code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' }
		],
		currentLanguage: 'en',
		showFlags: true,
		showNativeName: false,
		searchable: true,
		dropdownPlacement: 'bottom',
		variant: 'default',
		size: 'md'
	},
	controls: {
		showFlags: { type: 'boolean' },
		showNativeName: { type: 'boolean' },
		searchable: { type: 'boolean' },
		dropdownPlacement: { type: 'select', options: ['top', 'bottom'] },
		variant: { type: 'select', options: TOKEN_COLOR_TONE },
		// sm … lg: the sizes of the legacy story.
		size: { type: 'select', options: TOKEN_SIZE.slice(1, 4) }
	},
	presets: {
		Neutral: { variant: 'neutral', size: 'sm' },
		'Primary without flags': { variant: 'primary', showFlags: false }
	}
} satisfies ContractStory<RecipeLanguageSelector>;
