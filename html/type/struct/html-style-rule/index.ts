/**
 * One rule of the html skin. `target` is `@scope` (the skin root itself), `#<category>`
 * (every element of that registry category), a tag or a raw selector, or a list of them.
 * Values reference theme tokens through `var(--token, fallback)`.
 */
export type HtmlStyleRule = {
	readonly target: string | readonly string[];
	/** Pseudo-class or attribute state kept inside `:where()`, e.g. `:hover`, `[open]`. */
	readonly state?: string;
	/** Pseudo-element appended after `:where()`, e.g. `::marker`, `::backdrop`. */
	readonly pseudo?: string;
	readonly media?: string;
	readonly declarations: Readonly<Record<string, string>>;
};
