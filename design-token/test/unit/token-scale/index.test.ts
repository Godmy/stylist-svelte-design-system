import { describe, expect, it } from 'vitest';
import { TOKEN_SPACE } from '$stylist/design-token/const/object/space';
import { TOKEN_RADIUS } from '$stylist/design-token/const/object/radius';
import { TOKEN_FONT_SIZE } from '$stylist/design-token/const/object/font-size';
import { RECORD_TOKEN_ALIAS } from '$stylist/design-token/const/record/token-alias';

const SCALES = [
	['space', TOKEN_SPACE],
	['radius', TOKEN_RADIUS],
	['font-size', TOKEN_FONT_SIZE]
] as const;

describe('design-token size scales', () => {
	it.each(SCALES)('%s keys are 4px steps written without dots', (_, scale) => {
		for (const [key, value] of Object.entries(scale)) {
			expect(key).not.toContain('.');
			if (!/^\d+(-5)?$/.test(key)) continue;
			const steps = Number(key.replace('-', '.'));
			expect(value).toBe(steps === 0 ? '0' : `${steps * 0.25}rem`);
		}
	});

	it('keeps the named exceptions of the scales', () => {
		expect(TOKEN_SPACE.px).toBe('1px');
		expect(TOKEN_RADIUS.full).toBe('9999px');
	});

	it('maps legacy names onto global tokens without a domain prefix', () => {
		for (const [legacy, token] of Object.entries(RECORD_TOKEN_ALIAS)) {
			expect(legacy).toMatch(/^--/);
			expect(token).toMatch(
				/^--(space|radius|font-size|line-height|font-weight|letter-spacing|duration|easing|z-index)-[a-z0-9-]+$/
			);
		}
	});
});
