import { ManagerLocaleContext } from '$stylist/localization/class/manager/locale-context';
import type { ContractLocaleContext } from '$stylist/localization/interface/contract/locale-context';

/** Language settings of the nearest LocaleProvider (or the `en` defaults); call during init. */
export function useLocale(): ContractLocaleContext {
	return ManagerLocaleContext.get();
}
