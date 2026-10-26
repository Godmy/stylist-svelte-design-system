import TranslationEditor from '$stylist/localization/component/organism/translation-editor/index.svelte';
import type { RecipeTranslationEditor } from '$stylist/localization/interface/recipe/translation-editor';
import type { ContractStory } from '$stylist/html/interface/contract/story';

const TEXTS = [
	{
		id: '1',
		key: 'hello',
		original: 'Hello',
		translations: { en: 'Hello', ru: 'Привет', ar: 'مرحبًا', he: 'שלום' },
		context: 'Greeting',
		status: 'translated' as const
	},
	{
		id: '2',
		key: 'bye',
		original: 'Goodbye',
		translations: { en: 'Goodbye', ru: '', ar: '', he: '' },
		context: 'Farewell',
		status: 'untranslated' as const
	},
	{
		id: '3',
		key: 'welcome',
		original: 'Welcome',
		translations: { en: 'Welcome', ru: 'Добро пожаловать', ar: 'أهلًا وسهلًا', he: 'ברוכים הבאים' },
		context: 'Introduction',
		status: 'needs-review' as const
	}
];
const LOCALES = ['en', 'ru', 'ar', 'he'];

/** Table editor of translatable texts per locale; the story render wires save, import and export. */
export default {
	component: TranslationEditor,
	title: 'TranslationEditor',
	description:
		'Table editor of translatable texts. Headers, buttons, statuses and aria-labels come from the catalog (Language setting of the panel); translations in ar and he are written right to left.',
	args: {
		texts: TEXTS,
		locales: LOCALES,
		defaultLocale: 'en',
		currentLocale: 'ru',
		showKeyColumn: true,
		showContextColumn: false,
		showStatusColumn: true
	},
	controls: {
		texts: {
			type: 'json',
			label: 'Texts',
			description:
				'List of { id, key, original, translations: { <locale>: text }, context?, status }; status is translated, needs-review or untranslated.',
			example: [
				{
					id: '1',
					key: 'hello',
					original: 'Hello',
					translations: { ru: 'Привет' },
					status: 'translated'
				}
			]
		},
		locales: {
			type: 'json',
			label: 'Locales',
			description: 'Locale codes of the texts.',
			example: ['en']
		},
		defaultLocale: {
			type: 'select',
			label: 'Source locale',
			description: 'Locale of the source column.',
			options: LOCALES
		},
		currentLocale: {
			type: 'select',
			label: 'Target locale',
			description: 'Locale being translated.',
			options: LOCALES
		},
		showKeyColumn: { type: 'boolean', label: 'Key column', description: 'Message keys.' },
		showContextColumn: {
			type: 'boolean',
			label: 'Context column',
			description: 'Context notes for translators.'
		},
		showStatusColumn: {
			type: 'boolean',
			label: 'Status column',
			description: 'Translation status of every text.'
		},
		class: { type: 'text', label: 'Class', description: 'Extra classes on the root.' },
		headerClass: {
			type: 'text',
			label: 'Header class',
			description: 'Extra classes on the header.'
		},
		tableClass: { type: 'text', label: 'Table class', description: 'Extra classes on the table.' },
		rowClass: { type: 'text', label: 'Row class', description: 'Extra classes on every row.' },
		editorClass: {
			type: 'text',
			label: 'Editor class',
			description: 'Extra classes on the inline editor.'
		}
	},
	presets: {
		Arabic: { currentLocale: 'ar' },
		Hebrew: { currentLocale: 'he', showContextColumn: true },
		'All columns': { showContextColumn: true },
		Compact: { showKeyColumn: false, showStatusColumn: false },
		Empty: { texts: [] }
	}
} satisfies ContractStory<RecipeTranslationEditor>;
