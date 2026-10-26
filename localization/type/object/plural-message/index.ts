import type { PluralCategory } from '$stylist/localization/type/alias/plural-category';

/**
 * Message forms by CLDR plural category, chosen by the `count` value:
 * `{ one: '{count} file', other: '{count} files' }`; Russian also needs `few` and `many`.
 */
export type PluralMessage = Partial<Record<PluralCategory, string>> & { other: string };
