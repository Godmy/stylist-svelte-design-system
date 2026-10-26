import CountryFlag from '$stylist/localization/component/atom/country-flag/index.svelte';
import type { RecipeCountryFlag } from '$stylist/localization/interface/recipe/country-flag';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Emoji flag of a two-letter country code, named in the interface language. */
export default {
	component: CountryFlag,
	title: 'CountryFlag',
	description:
		'Emoji flag of an ISO country code. Its accessible name is the country in the interface language (Language setting of the panel); an invalid code shows a fallback box.',
	args: { countryCode: 'GE', size: 48 },
	controls: {
		countryCode: {
			type: 'text',
			label: 'Country code',
			description: 'ISO 3166-1 alpha-2 code, e.g. GE, DE, SA; any other value shows the fallback.'
		},
		size: {
			type: 'range',
			label: 'Size',
			description: 'Flag size in pixels.',
			min: 12,
			max: 96,
			step: 4
		},
		content: {
			type: 'text',
			label: 'Fallback text',
			description: 'Text and accessible name of the fallback box; "?" when empty.'
		},
		class: { type: 'text', label: 'Class', description: 'Extra classes on the flag.' }
	},
	presets: {
		Russia: { countryCode: 'RU' },
		'Saudi Arabia (ar)': { countryCode: 'SA' },
		'Israel (he)': { countryCode: 'IL' },
		Small: { countryCode: 'DE', size: 16 },
		Fallback: { countryCode: 'USA', content: 'N/A' }
	},
	layout: 'centered'
} satisfies ContractStory<RecipeCountryFlag>;
