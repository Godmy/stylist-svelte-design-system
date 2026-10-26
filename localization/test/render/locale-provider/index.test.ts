import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render } from '@testing-library/svelte';
import { flushSync } from 'svelte';
import Story from '$stylist/localization/component/atom/locale-provider/index.story.svelte';
import LocalePreview from '$stylist/localization/component/molecule/locale-preview/index.svelte';

afterEach(() => cleanup());

describe('LocaleProvider', () => {
	it('speaks English without a provider', () => {
		const { container } = render(LocalePreview, { props: { count: 1 } });
		expect(container.textContent).toContain('1 file selected');
		expect(container.textContent).toContain('Next');
	});

	it('translates children, sets lang/dir and follows locale changes', () => {
		const view = render(Story, { props: { locale: 'ru', currency: 'RUB', timeZone: 'UTC' } });
		const root = view.container.querySelector('.localization-locale-provider')!;
		expect(root.getAttribute('lang')).toBe('ru');
		expect(root.getAttribute('dir')).toBe('ltr');
		expect(view.container.textContent).toContain('Выбрано 5 файлов');
		expect(view.container.textContent).toContain('Далее');
		expect(view.container.textContent).toMatch(/1\s?234,56\s?₽/);

		flushSync(() => view.rerender({ locale: 'ar', currency: 'AED', timeZone: 'UTC' }));
		expect(root.getAttribute('dir')).toBe('rtl');
		expect(view.container.textContent).toContain('التالي');
	});

	it('applies site overrides and falls back for unknown locales', () => {
		const view = render(Story, {
			props: { locale: 'fr', messages: { 'locale-preview.next': 'Continuer' } }
		});
		expect(view.container.textContent).toContain('Continuer');
		expect(view.container.textContent).toContain('5 files selected');
	});
});
