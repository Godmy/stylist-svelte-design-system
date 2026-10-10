/** May `text` be the raw content of `<style>`/`<script>`? False when it contains the element's closing delimiter. */
export function checkHtmlRawText(tag: 'style' | 'script', text: string): boolean {
	return !new RegExp(`</${tag}(?=[\t\n\f\r />])`, 'i').test(text);
}
