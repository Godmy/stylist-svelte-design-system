import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';
import type { TokenSize } from '$stylist/theme/type/alias/size';
export interface RecipeLanguageSelector extends ComputeIntersectAll<[SlotChildren]> {
	languages: {
		code: string;
		name: string;
		nativeName?: string;
		flag?: string; // Emoji or flag representation
	}[];
	currentLanguage?: string;
	onLanguageChange?: (code: string) => void;
	showFlags?: boolean;
	showNativeName?: boolean;
	searchable?: boolean;
	dropdownPlacement?: 'top' | 'bottom';
	variant?: TokenColorTone;
	size?: TokenSize;
	class?: string;
	buttonClass?: string;
	dropdownClass?: string;
	languageClass?: string;
}
