import { describe, expect, it } from 'vitest';
import { formatUsd } from '$stylist/localization/function/transform/format-usd';

const plain = (text: string) => text.replace(/[  ]/g, ' ');

describe('formatUsd', () => {
	it('drops zero cents and keeps real ones', () => {
		expect(plain(formatUsd(9000))).toBe('90 $');
		expect(plain(formatUsd(9050))).toBe('90,5 $');
		expect(plain(formatUsd(12345, 'en-US'))).toBe('$123.45');
	});

	it('shows the empty mark without an amount, but zero as an amount', () => {
		expect(formatUsd(null)).toBe('—');
		expect(formatUsd(undefined, 'ru-RU', 'n/a')).toBe('n/a');
		expect(plain(formatUsd(0))).toBe('0 $');
	});
});
