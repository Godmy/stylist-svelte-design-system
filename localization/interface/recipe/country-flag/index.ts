import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { SlotImage } from '$stylist/image/interface/slot/image';
export interface RecipeCountryFlag
	extends ComputeIntersectAll<[SlotTheme, SlotImage, SlotText, HTMLAttributes<HTMLSpanElement>]> {
	countryCode?: string;
	size?: number;
	content?: string;
}
