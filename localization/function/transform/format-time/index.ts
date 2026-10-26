/** A time with seconds in an explicit language and IANA time zone, e.g. `09:30:00`. */
export function formatTime(date: Date, localeCode: string, timeZone: string): string {
	return new Intl.DateTimeFormat(localeCode, { timeStyle: 'medium', timeZone }).format(date);
}
