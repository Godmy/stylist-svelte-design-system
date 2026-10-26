import { describe, expect, it } from 'vitest';
import { resolveMessage } from '$stylist/localization/function/resolve/message';
import { pickLocalized } from '$stylist/localization/function/resolve/localized-text';
import { resolveTextDirection } from '$stylist/localization/function/resolve/text-direction';
import { LOCALIZATION_LOCALE_PREVIEW_MESSAGE } from '$stylist/localization/const/record/locale-preview-message';
import type { MessageCatalog } from '$stylist/localization/type/object/message-catalog';

const catalog: MessageCatalog<'next' | 'files' | 'page'> =
	LOCALIZATION_LOCALE_PREVIEW_MESSAGE as never;
const t = (
	locale: string,
	key: 'next' | 'files' | 'page',
	values?: Record<string, string | number>,
	overrides?: Record<string, string>
) =>
	resolveMessage({
		catalog,
		key,
		locale,
		fallback: 'en',
		namespace: 'locale-preview',
		overrides,
		values
	});

describe('resolveMessage', () => {
	it('picks the locale, its language, then the fallback', () => {
		expect(t('ru', 'next')).toBe('Далее');
		expect(t('ru-RU', 'next')).toBe('Далее');
		expect(t('fr', 'next')).toBe('Next');
	});

	it('returns the key when no catalog has it', () => {
		expect(t('ru', 'page')).toBe('page');
	});

	it('lets site overrides win by namespace.key', () => {
		expect(t('ru', 'next', undefined, { 'locale-preview.next': 'Продолжить' })).toBe('Продолжить');
	});

	it('chooses CLDR plural forms and formats numbers for the locale', () => {
		expect(t('ru', 'files', { count: 1 })).toBe('Выбран 1 файл');
		expect(t('ru', 'files', { count: 3 })).toBe('Выбрано 3 файла');
		expect(t('ru', 'files', { count: 5 })).toBe('Выбрано 5 файлов');
		expect(t('ru', 'files', { count: 21 })).toBe('Выбран 21 файл');
		expect(t('en', 'files', { count: 1200 })).toBe('1,200 files selected');
		expect(t('ar', 'files', { count: 2 })).toBe('تم اختيار ملفين');
		expect(t('zh', 'files', { count: 1 })).toBe('已选择 1 个文件');
	});

	it('keeps unknown placeholders', () => {
		expect(
			resolveMessage({
				catalog: { en: { hello: 'Hi {name} {missing}' } },
				key: 'hello',
				locale: 'en',
				fallback: 'en',
				values: { name: 'Ann' }
			})
		).toBe('Hi Ann {missing}');
	});
});

describe('pickLocalized and resolveTextDirection', () => {
	it('picks content by locale with fallbacks', () => {
		const text = { en: 'Tea', ru: 'Чай', ka: 'ჩაი' };
		expect(pickLocalized(text, 'ka')).toBe('ჩაი');
		expect(pickLocalized(text, 'ru-RU')).toBe('Чай');
		expect(pickLocalized(text, 'de')).toBe('Tea');
		expect(pickLocalized('plain', 'ru')).toBe('plain');
	});

	it('detects right-to-left scripts', () => {
		expect(resolveTextDirection('ar')).toBe('rtl');
		expect(resolveTextDirection('he-IL')).toBe('rtl');
		expect(resolveTextDirection('ru')).toBe('ltr');
		expect(resolveTextDirection('zh-Hans')).toBe('ltr');
		expect(resolveTextDirection('not a tag')).toBe('ltr');
	});
});
