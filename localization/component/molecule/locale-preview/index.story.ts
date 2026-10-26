import LocalePreview from '$stylist/localization/component/molecule/locale-preview/index.svelte';
import type { RecipeLocalePreview } from '$stylist/localization/interface/recipe/locale-preview';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Without a provider it speaks English; the sandbox language setting switches it. */
export default {
	component: LocalePreview,
	title: 'LocalePreview',
	description: 'Образец локализованного интерфейса: перевод, множественное число, дата и деньги',
	args: { count: 3, amount: 123456, date: '2026-10-26T09:30:00Z' },
	controls: {
		count: {
			type: 'range',
			label: 'Count',
			description: 'Files count; watch the plural form change.',
			min: 0,
			max: 25,
			step: 1
		},
		amount: {
			type: 'number',
			label: 'Amount',
			description: 'Money in minor units (kopecks, cents).'
		},
		date: { type: 'text', label: 'Date', description: 'ISO date or timestamp.' },
		class: { type: 'text', label: 'Class', description: 'Extra CSS class.' }
	},
	presets: {
		One: { count: 1 },
		Two: { count: 2 },
		Five: { count: 5 },
		'Twenty-one': { count: 21 },
		Zero: { count: 0 }
	},
	layout: 'padded'
} satisfies ContractStory<RecipeLocalePreview>;
