<script lang="ts">
	import TranslationEditor from '$stylist/localization/component/organism/translation-editor/index.svelte';
	import type { RecipeTranslationEditor } from '$stylist/localization/interface/recipe/translation-editor';

	// Render of index.story.ts: callbacks are not serializable args, so the render wires them
	// and shows the last event under the editor.
	let args: RecipeTranslationEditor = $props();
	let event = $state('');
</script>

<TranslationEditor
	{...args}
	onTranslationChange={(key, locale, value) => (event = `${key} [${locale}] = "${value}"`)}
	onSave={() => (event = 'save')}
	onExport={() => (event = 'export')}
	onImport={(file) => (event = `import ${file.name}`)}
/>
<output aria-live="polite">{event}</output>
