import { describe, expect, it } from 'vitest';
import { formatMoney } from '$stylist/localization/function/transform/format-money';

const plain = (text: string) => text.replace(/[  ]/g, ' ');

describe('formatMoney', () => {
	it('formats minor units in the currency notation', () => {
		expect(plain(formatMoney(123456))).toBe('1 234,56 ₽');
		expect(plain(formatMoney(150000, 2, 'USD', 'en-US'))).toBe('$1,500.00');
	});

	it('respects the minor unit and counts a missing amount as zero', () => {
		expect(plain(formatMoney(1500, 0, 'JPY', 'en-US'))).toBe('¥1,500');
		expect(plain(formatMoney(null))).toBe('0,00 ₽');
		expect(plain(formatMoney(undefined, 2, 'USD', 'en-US'))).toBe('$0.00');
	});

	it('falls back to the plain number and code for an unknown currency', () => {
		expect(plain(formatMoney(1000, 2, 'XX', 'ru-RU'))).toBe('10 XX');
	});
});
