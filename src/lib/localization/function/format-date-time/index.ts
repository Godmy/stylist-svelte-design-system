export function formatDate(date: Date, localeCode: string, timeZone: string): string {
	return new Intl.DateTimeFormat(localeCode, { dateStyle: 'full', timeZone }).format(date);
}

export function formatTime(date: Date, localeCode: string, timeZone: string): string {
	return new Intl.DateTimeFormat(localeCode, { timeStyle: 'medium', timeZone }).format(date);
}

export function formatDateTime(date: Date, localeCode: string, timeZone: string): string {
	return new Intl.DateTimeFormat(localeCode, {
		dateStyle: 'long',
		timeStyle: 'short',
		timeZone
	}).format(date);
}
