import LocaleSwitcher from './index.svelte';
import type { RecipeLocaleSwitcher } from '$stylist/localization/interface/recipe/locale-switcher';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Locale and timezone switcher with a date and time preview. */
export default {
	component: LocaleSwitcher,
	title: 'LocaleSwitcher',
	description: 'Locale and timezone switcher with date and time preview.',
	args: {
		locales: [
			{ code: 'en-US', name: 'English', region: 'United States', flag: 'US' },
			{ code: 'es-ES', name: 'Spanish', region: 'Spain', flag: 'ES' },
			{ code: 'fr-FR', name: 'French', region: 'France', flag: 'FR' },
			{ code: 'de-DE', name: 'German', region: 'Germany', flag: 'DE' }
		],
		currentLocale: 'en-US',
		timezoneOptions: [
			{ value: 'America/New_York', label: 'Eastern Time (New York)' },
			{ value: 'America/Los_Angeles', label: 'Pacific Time (Los Angeles)' },
			{ value: 'Europe/London', label: 'Greenwich Mean Time (London)' },
			{ value: 'Asia/Tokyo', label: 'Japan Standard Time (Tokyo)' }
		],
		currentTimezone: 'America/New_York',
		showRegional: true,
		showDatePreview: true,
		showTimePreview: true
	},
	controls: {
		showRegional: { type: 'boolean' },
		showDatePreview: { type: 'boolean' },
		showTimePreview: { type: 'boolean' }
	},
	presets: {
		'Without previews': { showDatePreview: false, showTimePreview: false }
	}
} satisfies ContractStory<RecipeLocaleSwitcher>;
