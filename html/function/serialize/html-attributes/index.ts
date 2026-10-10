import { HTML_BOOLEAN_ATTRIBUTE } from '../../../const/array/html-boolean-attribute';

/** Serializes DOM attributes; event handlers and component-only props are omitted. */
export function serializeHtmlAttributes(attrs: Record<string, unknown>): string {
	const escape = (value: unknown) =>
		String(value)
			.replaceAll('&', '&amp;')
			.replaceAll('"', '&quot;')
			.replaceAll('<', '&lt;')
			.replaceAll('>', '&gt;');
	return Object.entries(attrs)
		.map(([name, value]) => {
			if (value == null || typeof value === 'function' || name.startsWith('on')) return '';
			if (!/^[^\s"'<>/=]+$/.test(name)) throw new Error(`Invalid HTML attribute name: ${name}`);
			const boolean = (HTML_BOOLEAN_ATTRIBUTE as readonly string[]).includes(name.toLowerCase());
			if (boolean && value === false) return '';
			if (boolean && value === true) return ` ${name}`;
			if (typeof value === 'object') return '';
			return ` ${name}="${escape(value)}"`;
		})
		.join('');
}
