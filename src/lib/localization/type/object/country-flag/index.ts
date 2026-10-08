import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { RecipeCountryFlag } from '$stylist/localization/interface/recipe/country-flag';

export type CountryFlagProps = RecipeCountryFlag &
	HTMLAttributes<HTMLSpanElement> &
	SlotThemeBorder &
	SlotTypography;
