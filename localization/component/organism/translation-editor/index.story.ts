import TranslationEditor from '$stylist/localization/component/organism/translation-editor/index.svelte';
import type { RecipeTranslationEditor } from '$stylist/localization/interface/recipe/translation-editor';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Table editor of translatable texts per locale. */
export default {
	component: TranslationEditor,
	title: 'TranslationEditor',
	description: 'A translation editor component for managing multilingual content.',
	args: {
		texts: [
			{
				id: '1',
				key: 'hello',
				original: 'Hello',
				translations: { en: 'Hello', es: 'Hola', fr: 'Bonjour' },
				context: 'Greeting',
				status: 'translated'
			},
			{
				id: '2',
				key: 'bye',
				original: 'Goodbye',
				translations: { en: 'Goodbye', es: '', fr: '' },
				context: 'Farewell',
				status: 'untranslated'
			},
			{
				id: '3',
				key: 'welcome',
				original: 'Welcome',
				translations: { en: 'Welcome', es: 'Bienvenido', fr: 'Bienvenue' },
				context: 'Introduction',
				status: 'needs-review'
			}
		],
		locales: ['en', 'es', 'fr'],
		defaultLocale: 'en',
		currentLocale: 'es',
		showKeyColumn: true,
		showContextColumn: false,
		showStatusColumn: true
	},
	controls: {
		showKeyColumn: { type: 'boolean' },
		showContextColumn: { type: 'boolean' },
		showStatusColumn: { type: 'boolean' },
		// The locales of the story texts.
		defaultLocale: { type: 'select', options: ['en', 'es', 'fr'] },
		currentLocale: { type: 'select', options: ['en', 'es', 'fr'] }
	},
	presets: {
		French: { currentLocale: 'fr' },
		'All columns': { showContextColumn: true }
	}
} satisfies ContractStory<RecipeTranslationEditor>;
