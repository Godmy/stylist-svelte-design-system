import { getContext, hasContext, setContext } from 'svelte';
import { LOCALIZATION_LOCALE_CONTEXT } from '$stylist/localization/const/value/locale-context';
import { LOCALIZATION_LOCALE_FALLBACK } from '$stylist/localization/const/value/locale-fallback';
import type { ContractLocaleContext } from '$stylist/localization/interface/contract/locale-context';

/** Svelte context of LocaleProvider; components without a provider get the `en` defaults. */
export class ManagerLocaleContext {
	static readonly DEFAULT: ContractLocaleContext = Object.freeze({
		locale: LOCALIZATION_LOCALE_FALLBACK,
		fallback: LOCALIZATION_LOCALE_FALLBACK,
		dir: 'ltr',
		timeZone: undefined,
		currency: undefined,
		messages: {}
	});

	static set(context: ContractLocaleContext): ContractLocaleContext {
		return setContext(LOCALIZATION_LOCALE_CONTEXT, context);
	}

	/** Nearest provider's context or the defaults; call during component initialisation. */
	static get(): ContractLocaleContext {
		return hasContext(LOCALIZATION_LOCALE_CONTEXT)
			? getContext<ContractLocaleContext>(LOCALIZATION_LOCALE_CONTEXT)
			: ManagerLocaleContext.DEFAULT;
	}
}
