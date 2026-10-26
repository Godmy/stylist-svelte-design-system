import type { PluralMessage } from '$stylist/localization/type/object/plural-message';

/** A message: text with `{name}` placeholders, or plural forms of it. */
export type MessageValue = string | PluralMessage;
