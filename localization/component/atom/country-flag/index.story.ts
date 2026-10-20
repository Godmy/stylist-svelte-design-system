import CountryFlag from './index.svelte';
import type { RecipeCountryFlag } from '$stylist/localization/interface/recipe/country-flag';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Emoji flag of a two-letter country code, with a fallback box for invalid codes. */
export default {
	component: CountryFlag,
	title: 'CountryFlag',
	description: 'A component to display country flags with customizable size',
	args: { countryCode: 'US', size: 24 },
	controls: {
		countryCode: { type: 'text', description: 'Two-letter country code' },
		size: { type: 'range', min: 12, max: 96, step: 4 },
		content: { type: 'text', description: 'Fallback text for an invalid code' }
	},
	presets: {
		Georgia: { countryCode: 'GE', size: 48 },
		Fallback: { countryCode: 'USA', content: 'N/A', size: 48 }
	},
	layout: 'centered'
} satisfies ContractStory<RecipeCountryFlag>;
