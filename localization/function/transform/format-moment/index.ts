/**
 * A moment (ISO timestamp) as a short date and time in `timeZone` (the runtime's zone
 * by default); unparsable input is returned as is, nothing gives `empty`.
 */
export function formatMoment(
	iso: string | null | undefined,
	locale = 'ru-RU',
	empty = '—',
	timeZone?: string
): string {
	if (!iso) return empty;
	const date = new Date(iso);
	return Number.isNaN(date.getTime())
		? iso
		: new Intl.DateTimeFormat(locale, { dateStyle: 'short', timeStyle: 'short', timeZone }).format(
				date
			);
}
