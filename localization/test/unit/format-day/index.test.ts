import { describe, expect, it } from 'vitest';
import { formatDay } from '$stylist/localization/function/transform/format-day';

describe('formatDay', () => {
	it('formats the calendar day without a time-zone shift', () => {
		expect(formatDay('2026-10-23')).toBe('23 окт. 2026 г.');
		// late evening in UTC-10 is still the same calendar day of the service
		expect(formatDay('2026-10-23T23:30:00-10:00')).toBe('23 окт. 2026 г.');
		expect(formatDay('2026-01-05', 'en-US')).toBe('Jan 5, 2026');
	});

	it('keeps unparsable text and marks a missing day', () => {
		expect(formatDay('soon')).toBe('soon');
		expect(formatDay(null)).toBe('—');
		expect(formatDay('', 'ru-RU', '')).toBe('');
	});
});
