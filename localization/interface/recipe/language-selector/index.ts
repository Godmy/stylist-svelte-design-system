import type { TokenColorTone } from '$stylist/design-token/type/alias/color-tone';
import type { TokenSize } from '$stylist/design-token/type/alias/size';
export interface RecipeLanguageSelector {
	/** Languages of the list; `flag` is a country code or an emoji. */
	languages: {
		code: string;
		name: string;
		nativeName?: string;
		flag?: string;
	}[];
	/** Code of the selected language. */
	currentLanguage?: string;
	onLanguageChange?: (code: string) => void;
	/** Flags before the names (default true). */
	showFlags?: boolean;
	/** Native name after the name when they differ (default false). */
	showNativeName?: boolean;
	/** Search field above the list (default true). */
	searchable?: boolean;
	/** List below (default) or above the button. */
	dropdownPlacement?: 'top' | 'bottom';
	/** Accent of focus, the selected language and its check mark; `default` is primary. */
	variant?: TokenColorTone;
	/** `sm`, `md` (default) or `lg`; other sizes render as `md`. */
	size?: TokenSize;
	class?: string;
	buttonClass?: string;
	dropdownClass?: string;
	languageClass?: string;
}
