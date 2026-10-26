/** A full date in an explicit language and IANA time zone, e.g. `Monday, 26 October 2026`. */
export function formatDate(date: Date, localeCode: string, timeZone: string): string {
	return new Intl.DateTimeFormat(localeCode, { dateStyle: 'full', timeZone }).format(date);
}
