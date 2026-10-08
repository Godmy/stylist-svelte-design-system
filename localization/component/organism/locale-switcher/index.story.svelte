<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import LocaleSwitcher from './index.svelte';

	let locales = [
		{ code: 'en-US', name: 'English', region: 'United States', flag: 'US' },
		{ code: 'es-ES', name: 'Spanish', region: 'Spain', flag: 'ES' },
		{ code: 'fr-FR', name: 'French', region: 'France', flag: 'FR' },
		{ code: 'de-DE', name: 'German', region: 'Germany', flag: 'DE' }
	];

	let currentLocale = $state('en-US');
	let currentTimezone = $state('America/New_York');
	const timezoneOptions = [
		{ value: 'America/New_York', label: 'Eastern Time (New York)' },
		{ value: 'America/Los_Angeles', label: 'Pacific Time (Los Angeles)' },
		{ value: 'Europe/London', label: 'Greenwich Mean Time (London)' },
		{ value: 'Asia/Tokyo', label: 'Japan Standard Time (Tokyo)' }
	];

	type Props = {
		showRegional: boolean;
		showDatePreview: boolean;
		showTimePreview: boolean;
	};

	const controls: SlotStory[] = [
		{ name: 'showRegional', type: 'boolean', defaultValue: true },
		{ name: 'showDatePreview', type: 'boolean', defaultValue: true },
		{ name: 'showTimePreview', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	id="organisms-locale-switcher"
	title="Organisms / Interaction / Controls / Locale Switcher"
	component={LocaleSwitcher}
	category="Organisms/Interaction/Controls"
	description="Locale and timezone switcher with date and time preview."
	{controls}
>
	{#snippet children(values: any)}
		{@const typedProps = values as Props}
		<div class="sb-organisms-locale-switcher _c1">
			<LocaleSwitcher
				{locales}
				{currentLocale}
				{timezoneOptions}
				{currentTimezone}
				showRegional={typedProps.showRegional}
				showDatePreview={typedProps.showDatePreview}
				showTimePreview={typedProps.showTimePreview}
				onLocaleChange={(localeCode) => (currentLocale = localeCode)}
				onTimezoneChange={(timezone) => (currentTimezone = timezone)}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1rem;
	}
</style>
