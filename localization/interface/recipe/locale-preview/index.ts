/** Sample of localized UI: translated and pluralised text, a date, money and direction. */
export interface RecipeLocalePreview {
	/** Files count for the plural message. */
	count?: number;
	/** Money in minor units (kopecks, cents). */
	amount?: number;
	/** ISO date or timestamp shown in the provider's time zone. */
	date?: string;
	class?: string;
}
