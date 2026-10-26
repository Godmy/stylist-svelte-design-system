import { describe, expect, it } from 'vitest';
import { formatDate } from '$stylist/localization/function/transform/format-date';
import { formatTime } from '$stylist/localization/function/transform/format-time';
import { formatDateTime } from '$stylist/localization/function/transform/format-date-time';

const moment = new Date('2026-10-26T09:30:05Z');

describe('date and time formatters', () => {
	it('format in the given language', () => {
		expect(formatDate(moment, 'en-US', 'UTC')).toBe('Monday, October 26, 2026');
		expect(formatDate(moment, 'ru', 'UTC')).toBe('понедельник, 26 октября 2026 г.');
		expect(formatDateTime(moment, 'en-US', 'UTC')).toMatch(/^October 26, 2026 at 9:30\sAM$/);
	});

	it('format in the given time zone', () => {
		expect(formatTime(moment, 'en-GB', 'UTC')).toBe('09:30:05');
		expect(formatTime(moment, 'en-GB', 'Asia/Tokyo')).toBe('18:30:05');
		expect(formatDate(new Date('2026-10-26T23:30:00Z'), 'en-US', 'Asia/Tokyo')).toBe(
			'Tuesday, October 27, 2026'
		);
	});
});
