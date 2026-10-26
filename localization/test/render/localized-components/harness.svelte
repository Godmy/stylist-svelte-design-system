<script lang="ts">
	import type { Component } from 'svelte';
	import LocaleProvider from '$stylist/localization/component/atom/locale-provider/index.svelte';

	// Test harness: one component inside a real LocaleProvider, so a rerender with another
	// `locale` checks what a site language switch does.
	let {
		locale,
		component: Child,
		childProps = {}
	}: {
		locale: string;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any -- any component under test
		component: Component<any>;
		/** Not `props`: testing-library reads `rerender({ props })` as its legacy form. */
		childProps?: Record<string, unknown>;
	} = $props();
</script>

<LocaleProvider {locale}><Child {...childProps} /></LocaleProvider>
