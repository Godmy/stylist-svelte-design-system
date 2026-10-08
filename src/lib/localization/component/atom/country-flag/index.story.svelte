<script lang="ts">
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import CountryFlag from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'countryCode',
			type: 'text',
			defaultValue: 'US'
		},
		{
			name: 'size',
			type: 'text',
			defaultValue: '24'
		}
	];
</script>

<Story
	{controls}
	component={CountryFlag}
	title="CountryFlag Component"
	description="A component to display country flags with customizable size"
	tags={['information', 'localization', 'flag', 'country']}
>
	{#snippet children(values: any)}
		{@const parsedSize = Number(values.size)}
		<CountryFlag
			countryCode={values.countryCode as string}
			size={Number.isNaN(parsedSize) ? 24 : parsedSize}
		/>
	{/snippet}
</Story>
