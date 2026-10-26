import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeCountryFlag extends ComputeIntersectAll<
	[SlotTheme, HTMLAttributes<HTMLSpanElement>]
> {
	/** ISO 3166-1 alpha-2 code, e.g. `GE`; any case. Other values show the fallback box. */
	countryCode?: string;
	/** Flag size in pixels. */
	size?: number;
	/** Text of the fallback box (and its accessible name) for an invalid code. */
	content?: string;
}
