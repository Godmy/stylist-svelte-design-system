import type { LOCALIZATION_PLURAL_CATEGORY } from '$stylist/localization/const/array/plural-category';

/** CLDR plural category returned by Intl.PluralRules#select. */
export type PluralCategory = (typeof LOCALIZATION_PLURAL_CATEGORY)[number];
