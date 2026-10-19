import type { HtmlAttributeValue } from '../../../type/alias/html-attribute-value';
import { HTML_BOOLEAN_ATTRIBUTE } from '../../../const/array/html-boolean-attribute';

/**
 * Applies attributes and `on*` handlers to an existing node (`<html>`, `<body>`),
 * returning a cleanup that restores the previous state.
 */
export function applyHtmlAttributes(target: Element, attrs: Record<string, unknown>): () => void {
	const restore: (() => void)[] = [];
	for (const [name, value] of Object.entries(attrs)) {
		if (name.startsWith('on') && name in target && (typeof value === 'function' || value == null)) {
			// Native IDL setters preserve handler semantics (return values, `this`,
			// and body handlers that reflect the owning Window) without a copied event list.
			const handlers = target as unknown as Record<string, unknown>;
			const previous = handlers[name];
			handlers[name] = value ?? null;
			restore.push(() => {
				handlers[name] = previous;
			});
			continue;
		}
		if (name.startsWith('on') && typeof value === 'function') {
			const type = name.slice(2);
			const listener = value as EventListener;
			target.addEventListener(type, listener);
			restore.push(() => target.removeEventListener(type, listener));
			continue;
		}
		if (typeof value === 'function' || (value !== null && typeof value === 'object')) continue;
		const previous = target.getAttribute(name);
		const next = value as HtmlAttributeValue;
		const boolean = (HTML_BOOLEAN_ATTRIBUTE as readonly string[]).includes(name.toLowerCase());
		if (next === null || next === undefined || (boolean && next === false))
			target.removeAttribute(name);
		else target.setAttribute(name, boolean && next === true ? '' : String(next));
		restore.push(() =>
			previous === null ? target.removeAttribute(name) : target.setAttribute(name, previous)
		);
	}
	return () => restore.reverse().forEach((undo) => undo());
}
