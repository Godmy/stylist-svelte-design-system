<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import TranslationEditor from './index.svelte';
	import type { TranslatableText } from '$stylist/localization/type/object/translatable-text';
	import type { TranslationLocale } from '$stylist/localization/type/object/translation-locale';

	type Props = {
		showKeyColumn: boolean;
		showContextColumn: boolean;
		showStatusColumn: boolean;
		defaultLocale: string;
		currentLocale: string;
	};

	const controls: SlotStory[] = [
		{
			name: 'showKeyColumn',
			type: 'boolean',
			defaultValue: true
		},
		{
			name: 'showContextColumn',
			type: 'boolean',
			defaultValue: false
		},
		{
			name: 'showStatusColumn',
			type: 'boolean',
			defaultValue: true
		},
		{
			name: 'defaultLocale',
			type: 'text',
			defaultValue: 'en'
		},
		{
			name: 'currentLocale',
			type: 'text',
			defaultValue: 'es'
		}
	];

	const texts: TranslatableText[] = [
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
	];

	const locales: TranslationLocale[] = [
		{ code: 'en', name: 'English', flag: '????' },
		{ code: 'es', name: 'Spanish', flag: '????' },
		{ code: 'fr', name: 'French', flag: '????' }
	];
	const localeCodes = locales.map((locale) => locale.code);

	function handleTranslationChange(key: string, locale: string, translation: string) {
		console.log(`Translation changed for ${key} in ${locale}: ${translation}`);
	}

	function handleSave() {
		console.log('Translations saved');
		alert('Translations saved!');
	}

	function handleImport(data: unknown) {
		console.log('Translations imported:', data);
	}

	function handleExport() {
		console.log('Translations exported');
	}
</script>

<Story
	id="organisms-translation-editor"
	title="Organisms / Interaction / Input / Translation Editor"
	component={TranslationEditor}
	category="Organisms/Interaction/Input"
	description="A translation editor component for managing multilingual content."
	tags={['editor', 'translation', 'localization']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<TranslationEditor
				{texts}
				locales={localeCodes}
				defaultLocale={values.defaultLocale}
				currentLocale={values.currentLocale}
				showKeyColumn={values.showKeyColumn}
				showContextColumn={values.showContextColumn}
				showStatusColumn={values.showStatusColumn}
				onTranslationChange={handleTranslationChange}
				onSave={handleSave}
				onImport={handleImport}
				onExport={handleExport}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		max-width: 56rem;
		padding: 1rem;
	}
</style>
