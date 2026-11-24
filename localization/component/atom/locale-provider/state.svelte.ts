import { ManagerLocaleContext } from '$stylist/localization/class/manager/locale-context';

import { resolveTextDirection } from '$stylist/localization/function/resolve/text-direction';
import type { RecipeLocaleProvider } from '$stylist/localization/interface/recipe/locale-provider';
/** Reactive behavior of locale-provider; props are read lazily when needed. */
export function createLocaleProviderComponentState(
	getProps: () => Pick<
		RecipeLocaleProvider,
		'locale' | 'fallback' | 'timeZone' | 'currency' | 'messages' | 'document'
	> & {
		locale: Exclude<RecipeLocaleProvider['locale'], undefined>;
		fallback: Exclude<RecipeLocaleProvider['fallback'], undefined>;
		messages: Exclude<RecipeLocaleProvider['messages'], undefined>;
		document: Exclude<RecipeLocaleProvider['document'], undefined>;
	}
) {
	const props = $derived(getProps());
	const dir = $derived(resolveTextDirection(props['locale']));
	ManagerLocaleContext.set({
		get locale() {
			return props['locale'];
		},
		get fallback() {
			return props['fallback'];
		},
		get dir(): typeof dir {
			return dir;
		},
		get timeZone() {
			return props['timeZone'];
		},
		get currency() {
			return props['currency'];
		},
		get messages() {
			return props['messages'];
		}
	});
	$effect(() => {
		if (!props['document']) return;
		const root = window.document.documentElement;
		root.lang = props['locale'];
		root.dir = dir;
	});
	return {
		get dir(): typeof dir {
			return dir;
		}
	};
}
export default createLocaleProviderComponentState;
