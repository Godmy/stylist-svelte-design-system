import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/svelte';
import { flushSync, type Component } from 'svelte';
import Harness from './harness.svelte';
import CountryFlag from '$stylist/localization/component/atom/country-flag/index.svelte';
import LanguageSelector from '$stylist/localization/component/organism/language-selector/index.svelte';
import LocaleSwitcher from '$stylist/localization/component/organism/locale-switcher/index.svelte';
import TranslationEditor from '$stylist/localization/component/organism/translation-editor/index.svelte';
import LanguageSelectorStory from '$stylist/localization/component/organism/language-selector/index.story';
import LocaleSwitcherStory from '$stylist/localization/component/organism/locale-switcher/index.story';
import TranslationEditorStory from '$stylist/localization/component/organism/translation-editor/index.story';

afterEach(() => cleanup());

/** Renders `component` inside a LocaleProvider; `locale(code)` switches its language. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- any component under test
function inLocale(component: Component<any>, props: Record<string, unknown>, locale = 'en') {
	const view = render(Harness, { props: { locale, component, childProps: props } });
	return {
		...view,
		locale: async (code: string) => {
			await view.rerender({ locale: code, component, childProps: props });
			flushSync();
		}
	};
}

describe('localized components follow the LocaleProvider', () => {
	it('LanguageSelector translates its texts and plural count', async () => {
		const languages = LanguageSelectorStory.args.languages;
		const view = inLocale(LanguageSelector, { languages });
		expect(screen.getByRole('button').textContent).toContain('Select language');
		await fireEvent.click(screen.getByRole('button'));
		expect(screen.getByPlaceholderText('Search languages…')).toBeTruthy();
		expect(screen.getByText('8 languages available')).toBeTruthy();

		await view.locale('ru');
		expect(screen.getByPlaceholderText('Поиск языка…')).toBeTruthy();
		expect(screen.getByText('Доступно 8 языков')).toBeTruthy();
		await fireEvent.input(screen.getByRole('searchbox'), { target: { value: 'zz' } });
		expect(screen.getByRole('status').textContent).toBe('Языки не найдены');
		expect(screen.getByText('Доступно 0 языков')).toBeTruthy();

		await view.locale('ar');
		expect(screen.getByRole('status').textContent).toBe('لم يتم العثور على لغات');
	});

	it('LanguageSelector closes on Escape and returns focus to its button', async () => {
		const onLanguageChange = vi.fn();
		render(LanguageSelector, {
			props: { languages: LanguageSelectorStory.args.languages, onLanguageChange }
		});
		const trigger = screen.getByRole('button');
		await fireEvent.click(trigger);
		expect(trigger.getAttribute('aria-expanded')).toBe('true');
		await fireEvent.keyDown(window, { key: 'Escape' });
		expect(trigger.getAttribute('aria-expanded')).toBe('false');
		expect(document.activeElement).toBe(trigger);
		await fireEvent.click(trigger);
		await fireEvent.click(screen.getByRole('button', { name: /Russian/ }));
		expect(onLanguageChange).toHaveBeenCalledWith('ru');
	});

	it('LocaleSwitcher translates its labels and previews the selected locale', async () => {
		const { locales, timezoneOptions } = LocaleSwitcherStory.args;
		const view = inLocale(LocaleSwitcher, {
			locales,
			timezoneOptions,
			currentLocale: 'ru-RU',
			currentTimezone: 'Europe/Moscow'
		});
		expect(screen.getByRole('heading', { level: 3 }).textContent).toContain('Locale settings');
		expect(screen.getByLabelText('Time zone')).toBeTruthy();
		expect(screen.getByText('6 locales available')).toBeTruthy();
		// The preview speaks the selected locale, whatever the interface language.
		expect(view.container.textContent).toMatch(/\d{4} г\./);

		await view.locale('ru');
		expect(screen.getByRole('heading', { level: 3 }).textContent).toContain('Язык и регион');
		expect(screen.getByLabelText('Часовой пояс')).toBeTruthy();
		expect(screen.getByText('Доступно 6 локалей')).toBeTruthy();
	});

	it('LocaleSwitcher survives an invalid locale code and time zone', async () => {
		render(LocaleSwitcher, {
			props: { locales: [], currentLocale: 'not a locale', currentTimezone: 'Mars/Base' }
		});
		expect(screen.getByText('Locale: not a locale')).toBeTruthy();
		expect(screen.getByText('0 locales available')).toBeTruthy();
	});

	it('TranslationEditor translates headers, statuses and aria-labels', async () => {
		const { texts } = TranslationEditorStory.args;
		const view = inLocale(TranslationEditor, { texts, currentLocale: 'ru', onSave: () => {} });
		expect(screen.getByRole('columnheader', { name: 'Key' })).toBeTruthy();
		expect(screen.getByRole('button', { name: 'Save translations' })).toBeTruthy();
		expect(screen.getByRole('button', { name: 'Edit translation of hello' })).toBeTruthy();
		expect(screen.getByText('Needs review')).toBeTruthy();

		await view.locale('ru');
		expect(screen.getByRole('columnheader', { name: 'Ключ' })).toBeTruthy();
		expect(screen.getByRole('columnheader', { name: 'Перевод (ru)' })).toBeTruthy();
		expect(screen.getByRole('button', { name: 'Сохранить переводы' })).toBeTruthy();
		expect(screen.getByText('Нужна проверка')).toBeTruthy();
		expect(screen.getByText('Нет перевода')).toBeTruthy();
	});

	it('TranslationEditor edits without mutating its texts and hands the import file over', async () => {
		const texts = structuredClone(TranslationEditorStory.args.texts);
		const onTranslationChange = vi.fn();
		const onImport = vi.fn();
		const { container } = render(TranslationEditor, {
			props: { texts, currentLocale: 'ru', onTranslationChange, onImport }
		});
		await fireEvent.click(screen.getByRole('button', { name: 'Edit translation of bye' }));
		await fireEvent.input(screen.getByLabelText('Translation of bye'), {
			target: { value: 'Пока' }
		});
		await fireEvent.click(screen.getByRole('button', { name: 'Save' }));
		expect(onTranslationChange).toHaveBeenCalledWith('bye', 'ru', 'Пока');
		expect(screen.getByText('Пока')).toBeTruthy();
		expect(texts[1]!.translations.ru).toBe('');

		const file = new File(['{}'], 'ru.json', { type: 'application/json' });
		const input = container.querySelector('input[type="file"]') as HTMLInputElement;
		await fireEvent.change(input, { target: { files: [file] } });
		expect(onImport).toHaveBeenCalledWith(file);
		expect(screen.queryByRole('button', { name: 'Export translations' })).toBeNull();
	});

	it('CountryFlag names the country in the interface language', async () => {
		const view = inLocale(CountryFlag, { countryCode: 'de' });
		expect(screen.getByRole('img').getAttribute('aria-label')).toBe('Flag of Germany');
		await view.locale('ru');
		expect(screen.getByRole('img').getAttribute('aria-label')).toBe('Флаг: Германия');
		cleanup();
		render(CountryFlag, { props: { countryCode: 'USA', class: 'extra' } });
		expect(screen.getByRole('img').getAttribute('aria-label')).toBe('Unknown country');
		expect(screen.getByRole('img').classList.contains('extra')).toBe(true);
	});
});
