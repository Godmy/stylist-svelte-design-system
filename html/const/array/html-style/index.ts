import { TYPOGRAPHY_PRESET } from '$stylist/typography/const/preset/typography';

/**
 * Base skin of the html domain, ordered as in the stylesheet. Rules group elements by
 * registry category (`#heading`, `#interactive`, `#form-associated`, ...); tags appear only
 * where a category is too coarse. Every value is a theme token with a fallback, so the
 * skin also renders without ThemeProvider. Checked against HtmlStyleRule in test/unit.
 */
export const HTML_STYLE = [
	{
		target: '@scope',
		declarations: {
			...TYPOGRAPHY_PRESET.body,
			color: 'var(--color-text-primary, CanvasText)',
			background: 'var(--color-background-primary, Canvas)'
		}
	},
	{
		target: [
			'p',
			'ul',
			'ol',
			'menu',
			'dl',
			'pre',
			'blockquote',
			'figure',
			'table',
			'details',
			'fieldset',
			'form',
			'hgroup',
			'address'
		],
		declarations: { 'margin-block': '0 var(--layout-spacing-1rem, 1rem)' }
	},
	{
		target: '#heading',
		declarations: {
			'margin-block': 'var(--layout-spacing-1.5rem, 1.5rem) var(--layout-spacing-0.5rem, 0.5rem)',
			...TYPOGRAPHY_PRESET.heading,
			'text-wrap': 'balance'
		}
	},
	{ target: 'h1', declarations: { 'font-size': 'var(--typography-font-size-10, 2.5rem)' } },
	{ target: 'h2', declarations: { 'font-size': 'var(--typography-font-size-8, 2rem)' } },
	{ target: 'h3', declarations: { 'font-size': 'var(--typography-font-size-6, 1.5rem)' } },
	{ target: 'h4', declarations: { 'font-size': 'var(--typography-font-size-5, 1.25rem)' } },
	{ target: 'h5', declarations: { 'font-size': 'var(--typography-font-size-4, 1rem)' } },
	{
		target: 'h6',
		declarations: {
			'font-size': 'var(--typography-font-size-3, 0.75rem)',
			'letter-spacing': 'var(--typography-letter-spacing-wide, 0.04em)',
			'text-transform': 'uppercase'
		}
	},
	{
		target: 'hgroup > p',
		declarations: { margin: '0', color: 'var(--color-text-secondary, GrayText)' }
	},
	{
		target: 'a[href]',
		declarations: {
			color: 'var(--color-primary-600, LinkText)',
			'text-decoration-thickness': '1px',
			'text-underline-offset': '0.15em'
		}
	},
	{
		target: 'a[href]',
		state: ':hover',
		declarations: { color: 'var(--color-primary-700, LinkText)' }
	},
	{
		target: ['#interactive', 'summary', '[tabindex]'],
		state: ':focus-visible',
		declarations: {
			outline: 'var(--focus-width, 2px) solid var(--color-primary-500, Highlight)',
			'outline-offset': 'var(--focus-offset, 2px)'
		}
	},
	{
		// Controls only: a disabled fieldset would dim twice (itself and its controls).
		target: ['button', 'input', 'select', 'textarea'],
		state: ':disabled',
		declarations: { opacity: 'var(--opacity-60, 0.6)', cursor: 'not-allowed' }
	},
	{
		target: ['code', 'kbd', 'samp', 'pre'],
		declarations: {
			...TYPOGRAPHY_PRESET.code
		}
	},
	{
		target: ['code', 'kbd', 'samp'],
		declarations: {
			padding: '0.125em 0.35em',
			'border-radius': 'var(--layout-border-radius-sm, 0.125rem)',
			background: 'var(--color-background-secondary, Canvas)'
		}
	},
	{
		target: 'kbd',
		declarations: {
			border: 'var(--border-width-thin, 1px) solid var(--color-border-primary, GrayText)',
			'border-block-end-width': 'var(--border-width-medium, 2px)'
		}
	},
	{
		target: 'pre',
		declarations: {
			padding: 'var(--layout-spacing-1rem, 1rem)',
			overflow: 'auto',
			'border-radius': 'var(--layout-border-radius-md, 0.375rem)',
			background: 'var(--color-background-secondary, Canvas)'
		}
	},
	{
		target: 'pre code',
		declarations: { padding: '0', 'font-size': 'inherit', background: 'none' }
	},
	{
		target: 'mark',
		declarations: {
			padding: '0 0.15em',
			'border-radius': 'var(--layout-border-radius-sm, 0.125rem)',
			background: 'var(--color-warning-100, Mark)',
			color: 'inherit'
		}
	},
	{
		target: 'abbr[title]',
		declarations: { 'text-decoration': 'underline dotted', cursor: 'help' }
	},
	{ target: 'small', declarations: { 'font-size': 'var(--font-relative-small, 0.875em)' } },
	{ target: ['sub', 'sup'], declarations: { 'line-height': '0' } },
	{
		target: ['s', 'del'],
		declarations: { color: 'var(--color-text-secondary, GrayText)' }
	},
	{
		target: 'ins',
		declarations: {
			'text-decoration': 'none',
			background: 'var(--color-success-100, Canvas)'
		}
	},
	{
		target: 'blockquote',
		declarations: {
			'margin-inline': '0',
			'padding-inline-start': 'var(--layout-spacing-1rem, 1rem)',
			'border-inline-start':
				'var(--border-width-thick, 4px) solid var(--color-border-accent, GrayText)',
			color: 'var(--color-text-secondary, GrayText)'
		}
	},
	{
		target: 'hr',
		declarations: {
			border: '0',
			'border-block-start':
				'var(--border-width-thin, 1px) solid var(--color-border-secondary, GrayText)',
			'margin-block': 'var(--layout-spacing-2rem, 2rem)'
		}
	},
	{
		target: ['ul', 'ol', 'menu'],
		declarations: { 'padding-inline-start': 'var(--layout-spacing-1.5rem, 1.5rem)' }
	},
	{
		target: 'li + li',
		declarations: { 'margin-block-start': 'var(--layout-spacing-0.25rem, 0.25rem)' }
	},
	{
		target: 'li',
		pseudo: '::marker',
		declarations: { color: 'var(--color-text-secondary, GrayText)' }
	},
	{
		target: 'dt',
		declarations: { 'font-weight': 'var(--typography-font-weight-semibold, 600)' }
	},
	{
		target: 'dd',
		declarations: {
			'margin-inline-start': 'var(--layout-spacing-1.5rem, 1.5rem)',
			'margin-block-end': 'var(--layout-spacing-0.5rem, 0.5rem)'
		}
	},
	{
		target: 'table',
		declarations: {
			width: '100%',
			'border-collapse': 'collapse',
			'font-variant-numeric': 'tabular-nums'
		}
	},
	{
		target: 'caption',
		declarations: {
			...TYPOGRAPHY_PRESET.caption,
			'caption-side': 'top',
			'padding-block': 'var(--layout-spacing-0.5rem, 0.5rem)',
			'text-align': 'start',
			color: 'var(--color-text-secondary, GrayText)'
		}
	},
	{
		target: ['th', 'td'],
		declarations: {
			padding: 'var(--density-block, 0.5rem) var(--density-inline, 0.75rem)',
			'border-block-end':
				'var(--border-width-thin, 1px) solid var(--color-border-secondary, GrayText)',
			'text-align': 'start',
			'vertical-align': 'top'
		}
	},
	{
		target: 'th',
		declarations: {
			'font-weight': 'var(--typography-font-weight-semibold, 600)',
			background: 'var(--color-background-secondary, Canvas)'
		}
	},
	{
		target: ['img', 'video', 'canvas', 'svg', 'iframe', 'embed', 'object'],
		declarations: { 'max-width': '100%' }
	},
	{ target: ['img', 'video'], declarations: { height: 'auto' } },
	{ target: 'iframe', declarations: { border: '0' } },
	{ target: 'figure', declarations: { 'margin-inline': '0' } },
	{
		target: 'figcaption',
		declarations: {
			'margin-block-start': 'var(--layout-spacing-0.5rem, 0.5rem)',
			...TYPOGRAPHY_PRESET.caption,
			color: 'var(--color-text-secondary, GrayText)'
		}
	},
	{
		target: ['button', 'input', 'select', 'textarea'],
		declarations: { font: 'inherit', 'letter-spacing': 'inherit' }
	},
	{
		target: [
			'input:not([type])',
			'input[type="text"]',
			'input[type="search"]',
			'input[type="tel"]',
			'input[type="url"]',
			'input[type="email"]',
			'input[type="password"]',
			'input[type="date"]',
			'input[type="month"]',
			'input[type="week"]',
			'input[type="time"]',
			'input[type="datetime-local"]',
			'input[type="number"]',
			'select',
			'textarea'
		],
		declarations: {
			padding: 'var(--density-block, 0.5rem) var(--density-inline, 0.75rem)',
			border: 'var(--border-width-thin, 1px) solid var(--color-border-primary, GrayText)',
			'border-radius': 'var(--layout-border-radius-md, 0.375rem)',
			background: 'var(--color-background-primary, Field)',
			color: 'inherit',
			transition: 'border-color var(--motion-duration-150, 150ms) var(--motion-easing-ease, ease)'
		}
	},
	{
		target: ['input', 'select', 'textarea'],
		state: ':user-invalid',
		declarations: { 'border-color': 'var(--color-danger-500, Red)' }
	},
	{ target: 'textarea', declarations: { resize: 'vertical' } },
	{
		target: ['button', 'input[type="submit"]', 'input[type="reset"]', 'input[type="button"]'],
		declarations: {
			padding: 'var(--density-block, 0.5rem) var(--density-inline, 0.75rem)',
			border: 'var(--border-width-thin, 1px) solid transparent',
			'border-radius': 'var(--layout-border-radius-md, 0.375rem)',
			background: 'var(--color-primary-600, ButtonFace)',
			color: 'var(--color-on-primary, ButtonText)',
			'font-weight': 'var(--typography-font-weight-medium, 500)',
			cursor: 'pointer'
		}
	},
	{
		target: 'input[type="file"]',
		pseudo: '::file-selector-button',
		declarations: {
			'margin-inline-end': 'var(--layout-spacing-0.75rem, 0.75rem)',
			padding: 'var(--layout-spacing-0.5rem, 0.5rem) var(--layout-spacing-1rem, 1rem)',
			border: 'var(--border-width-thin, 1px) solid transparent',
			'border-radius': 'var(--layout-border-radius-md, 0.375rem)',
			background: 'var(--color-primary-600, ButtonFace)',
			color: 'var(--color-on-primary, ButtonText)',
			font: 'inherit',
			cursor: 'pointer'
		}
	},
	{
		target: ['button', 'input[type="submit"]', 'input[type="reset"]', 'input[type="button"]'],
		state: ':hover:not(:disabled)',
		declarations: { background: 'var(--color-primary-700, ButtonFace)' }
	},
	{
		target: [
			'input[type="checkbox"]',
			'input[type="radio"]',
			'input[type="range"]',
			'progress',
			'meter'
		],
		declarations: { 'accent-color': 'var(--color-primary-600, AccentColor)' }
	},
	{
		target: 'label',
		declarations: { 'font-weight': 'var(--typography-font-weight-medium, 500)' }
	},
	{
		target: 'fieldset',
		declarations: {
			'margin-inline': '0',
			padding: 'var(--layout-spacing-1rem, 1rem)',
			border: 'var(--border-width-thin, 1px) solid var(--color-border-secondary, GrayText)',
			'border-radius': 'var(--layout-border-radius-lg, 0.5rem)'
		}
	},
	{
		target: 'legend',
		declarations: {
			'padding-inline': 'var(--layout-spacing-0.25rem, 0.25rem)',
			'font-weight': 'var(--typography-font-weight-semibold, 600)'
		}
	},
	{
		target: 'details',
		declarations: {
			padding: 'var(--layout-spacing-0.5rem, 0.5rem) var(--layout-spacing-1rem, 1rem)',
			border: 'var(--border-width-thin, 1px) solid var(--color-border-secondary, GrayText)',
			'border-radius': 'var(--layout-border-radius-md, 0.375rem)'
		}
	},
	{
		target: 'summary',
		declarations: {
			cursor: 'pointer',
			'font-weight': 'var(--typography-font-weight-medium, 500)'
		}
	},
	{
		target: 'details[open] > summary',
		declarations: { 'margin-block-end': 'var(--layout-spacing-0.5rem, 0.5rem)' }
	},
	{
		target: 'dialog',
		declarations: {
			'max-width': 'min(var(--content-dialog, 32rem), calc(100vw - var(--content-gutter, 2rem)))',
			padding: 'var(--layout-spacing-1.5rem, 1.5rem)',
			border: 'var(--border-width-thin, 1px) solid var(--color-border-secondary, GrayText)',
			'border-radius': 'var(--layout-border-radius-xl, 0.75rem)',
			background: 'var(--color-background-raised, Canvas)',
			color: 'var(--color-text-primary, CanvasText)',
			'box-shadow': 'var(--elevation-modal, none)',
			'z-index': 'var(--layout-z-index-modal, 1400)'
		}
	},
	{
		target: 'dialog',
		pseudo: '::backdrop',
		declarations: { background: 'var(--color-backdrop, rgb(0 0 0 / 0.6))' }
	},
	{
		target: ['button', 'input[type="submit"]', 'input[type="reset"]', 'input[type="button"]'],
		state: ':active:not(:disabled)',
		declarations: { background: 'var(--color-primary-800, ButtonFace)' }
	},
	{
		target: ['input', 'textarea'],
		pseudo: '::placeholder',
		declarations: {
			color: 'var(--color-text-tertiary, GrayText)',
			opacity: 'var(--opacity-100, 1)'
		}
	},
	{
		target: ['input[readonly]', 'textarea[readonly]'],
		state: ':not(:disabled)',
		declarations: { background: 'var(--color-background-secondary, Field)' }
	},
	{
		target: 'option',
		state: ':checked',
		declarations: {
			background: 'var(--color-primary-600, Highlight)',
			color: 'var(--color-on-primary, HighlightText)'
		}
	},
	{
		target: 'a[href]',
		state: ':active',
		declarations: { color: 'var(--color-primary-800, LinkText)' }
	},
	{
		target: ['input', 'select', 'textarea'],
		media: '(prefers-reduced-motion: reduce)',
		declarations: { 'transition-duration': 'var(--motion-duration-0, 0ms)' }
	}
] as const;
