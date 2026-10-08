import type { TokenTranslation } from '$stylist/localization/type/alias/translation';

export type TranslatableText = {
	id: string;
	key: string;
	original: string;
	translations: Record<string, string>;
	context?: string;
	status: TokenTranslation;
};
