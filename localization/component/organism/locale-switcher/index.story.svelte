<script lang="ts">
	import LocaleSwitcher from './index.svelte';
	import type { RecipeLocaleSwitcher } from '$stylist/localization/interface/recipe/locale-switcher';

	// Render of index.story.ts: the locale and timezone are local state fed back through the change callbacks.
	let args: RecipeLocaleSwitcher = $props();
	let selectedLocale = $state<string>();
	let selectedTimezone = $state<string>();
	const currentLocale = $derived(selectedLocale ?? args.currentLocale);
	const currentTimezone = $derived(selectedTimezone ?? args.currentTimezone);
</script>

<LocaleSwitcher
	{...args}
	{currentLocale}
	{currentTimezone}
	onLocaleChange={(code) => (selectedLocale = code)}
	onTimezoneChange={(timezone) => (selectedTimezone = timezone)}
/>
