import { describe, expect, it } from 'vitest';
import { formatMoment } from '$stylist/localization/function/transform/format-moment';

const plain = (text: string) => text.replace(/[  ]/g, ' ');

describe('formatMoment', () => {
	it('formats a timestamp as a short date and time in the given zone', () => {
		expect(formatMoment('2026-10-23T09:05:00Z', 'ru-RU', '—', 'UTC')).toBe('23.10.2026, 09:05');
		expect(formatMoment('2026-10-23T21:05:00Z', 'ru-RU', '—', 'Europe/Moscow')).toBe(
			'24.10.2026, 00:05'
		);
		expect(plain(formatMoment('2026-10-23T09:05:00Z', 'en-US', '—', 'UTC'))).toBe(
			'10/23/26, 9:05 AM'
		);
	});

	it('keeps unparsable text and marks a missing moment', () => {
		expect(formatMoment('yesterday')).toBe('yesterday');
		expect(formatMoment(undefined)).toBe('—');
	});
});
