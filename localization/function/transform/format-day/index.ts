/**
 * A calendar day (`YYYY-MM-DD` or a timestamp whose first ten characters are the day)
 * without a time-zone shift; unparsable input is returned as is, nothing gives `empty`.
 */
export function formatDay(iso: string | null | undefined, locale = 'ru-RU', empty = '—'): string {
	if (!iso) return empty;
	const date = new Date(`${iso.slice(0, 10)}T00:00:00Z`);
	return Number.isNaN(date.getTime())
		? iso
		: new Intl.DateTimeFormat(locale, { dateStyle: 'medium', timeZone: 'UTC' }).format(date);
}
