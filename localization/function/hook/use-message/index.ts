import { ManagerLocaleContext } from '$stylist/localization/class/manager/locale-context';
import { resolveMessage } from '$stylist/localization/function/resolve/message';
import type { MessageCatalog } from '$stylist/localization/type/object/message-catalog';

/**
 * Translator of one component family: `const t = useMessage('pager', PAGER_MESSAGE)`, then
 * `t('next')` or `t('page', { page, total })` in markup. Reads the provider on every call,
 * so text follows locale changes. Site overrides use `<namespace>.<key>` names.
 */
export function useMessage<TKey extends string>(namespace: string, catalog: MessageCatalog<TKey>) {
	const context = ManagerLocaleContext.get();
	return (key: TKey, values?: Record<string, string | number>): string =>
		resolveMessage({
			catalog,
			key,
			namespace,
			values,
			locale: context.locale,
			fallback: context.fallback,
			overrides: context.messages
		});
}
