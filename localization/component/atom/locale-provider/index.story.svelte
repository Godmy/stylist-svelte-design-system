<script lang="ts">
	import LocaleProvider from '$stylist/localization/component/atom/locale-provider/index.svelte';
	import LocalePreview from '$stylist/localization/component/molecule/locale-preview/index.svelte';
	import type { RecipeLocaleProvider } from '$stylist/localization/interface/recipe/locale-provider';

	// Render of index.story.ts: the provider has no UI of its own, LocalePreview shows its effect.
	let args: RecipeLocaleProvider = $props();
</script>

<LocaleProvider {...args}>
	<LocalePreview count={5} />
</LocaleProvider>
