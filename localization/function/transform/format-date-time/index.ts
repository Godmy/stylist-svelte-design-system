/** A long date with a short time in an explicit language and IANA time zone. */
export function formatDateTime(date: Date, localeCode: string, timeZone: string): string {
	return new Intl.DateTimeFormat(localeCode, {
		dateStyle: 'long',
		timeStyle: 'short',
		timeZone
	}).format(date);
}
