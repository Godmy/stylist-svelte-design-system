<script lang="ts">
	import LanguageSelector from './index.svelte';
	import type { RecipeLanguageSelector } from '$stylist/localization/interface/recipe/language-selector';

	// Render of index.story.ts: the selected language is local state fed back through onLanguageChange.
	let args: RecipeLanguageSelector = $props();
	let selected = $state<string>();
	const currentLanguage = $derived(selected ?? args.currentLanguage);
</script>

<LanguageSelector {...args} {currentLanguage} onLanguageChange={(code) => (selected = code)} />
