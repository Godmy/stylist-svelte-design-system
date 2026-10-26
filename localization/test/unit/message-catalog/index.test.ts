import { describe, expect, it } from 'vitest';
import { checkMessageCatalog } from '$stylist/localization/function/check/message-catalog';
import type { MessageCatalog } from '$stylist/localization/type/object/message-catalog';

// Every component catalog of the workspace: `<domain>/const/record/<family>-message/index.ts`.
const catalogs = import.meta.glob<Record<string, MessageCatalog>>(
	'/modules/**/const/record/*-message/index.ts',
	{ eager: true }
);

describe('message catalogs', () => {
	it('checkMessageCatalog reports missing required keys, empty texts and plural gaps', () => {
		expect(
			checkMessageCatalog({
				en: { a: 'A', b: { one: 'b', other: 'bs' } },
				ru: { a: '', b: { one: 'б' } as never },
				ka: { a: 'ა' }
			})
		).toEqual(['ru.a', 'ru.b']);
		expect(checkMessageCatalog({ en: { a: 'A' } })).toEqual(['ru.a']);
	});

	it('finds the catalogs', () => {
		expect(Object.keys(catalogs).length).toBeGreaterThan(0);
	});

	it.each(Object.entries(catalogs))('%s covers en and ru', (_, module) => {
		const [catalog] = Object.values(module);
		expect(checkMessageCatalog(catalog!)).toEqual([]);
	});
});
