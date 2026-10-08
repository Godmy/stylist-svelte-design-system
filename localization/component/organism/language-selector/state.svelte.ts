import type { HTMLAttributes } from 'svelte/elements';
import type { RecipeLanguageSelector as ILanguageSelectorProps } from '$stylist/localization/interface/recipe/language-selector';

function createLanguageSelectorState(
	getProps: () => ILanguageSelectorProps & HTMLAttributes<HTMLDivElement>
) {
	const props = $derived(getProps());
	let isOpen = $state(false);
	let searchQuery = $state('');

	const languages = $derived(props.languages ?? []);
	const currentLanguage = $derived(props.currentLanguage);

	const filteredLanguages = $derived.by(() => {
		if (!searchQuery) return languages;
		const query = searchQuery.toLowerCase();
		return languages.filter(
			(lang) =>
				lang.name.toLowerCase().includes(query) ||
				(lang.nativeName && lang.nativeName.toLowerCase().includes(query)) ||
				lang.code.toLowerCase().includes(query)
		);
	});

	const selectedLanguage = $derived(languages.find((lang) => lang.code === currentLanguage));

	const baseClasses = $derived(['c-language-selector', props.class].filter(Boolean).join(' '));
	const buttonBaseClasses = $derived(
		[
			'c-language-selector__trigger',
			props.variant &&
				props.variant !== 'default' &&
				`c-language-selector__trigger--${props.variant}`,
			props.size && props.size !== 'md' && `c-language-selector__trigger--${props.size}`,
			props.buttonClass
		]
			.filter(Boolean)
			.join(' ')
	);
	const dropdownBaseClasses = $derived(
		[
			'c-language-selector__dropdown',
			props.dropdownPlacement === 'top' && 'c-language-selector__dropdown--top',
			props.dropdownClass
		]
			.filter(Boolean)
			.join(' ')
	);
	const searchInputClasses = $derived('c-language-selector__search');
	const flagClasses = $derived('c-language-selector__flag');
	const checkIconClasses = $derived('ml-auto h-4 w-4 text-[--color-icon-accent]');

	const restProps = $derived.by(() => {
		const {
			languages: _languages,
			currentLanguage: _currentLanguage,
			onLanguageChange: _onLanguageChange,
			showFlags: _showFlags,
			showNativeName: _showNativeName,
			searchable: _searchable,
			dropdownPlacement: _dropdownPlacement,
			variant: _variant,
			size: _size,
			class: _class,
			buttonClass: _buttonClass,
			dropdownClass: _dropdownClass,
			languageClass: _languageClass,
			...rest
		} = props;
		return rest;
	});

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	function selectLanguage(code: string) {
		props.onLanguageChange?.(code);
		isOpen = false;
		searchQuery = '';
	}

	function getLanguageItemClasses(isActive: boolean): string {
		return [
			'c-language-selector__item',
			isActive && 'c-language-selector__item--active',
			props.languageClass
		]
			.filter(Boolean)
			.join(' ');
	}

	return {
		get isOpen() {
			return isOpen;
		},
		set isOpen(value: boolean) {
			isOpen = value;
		},
		get searchQuery() {
			return searchQuery;
		},
		set searchQuery(value: string) {
			searchQuery = value;
		},
		get filteredLanguages() {
			return filteredLanguages;
		},
		get selectedLanguage() {
			return selectedLanguage;
		},
		get baseClasses() {
			return baseClasses;
		},
		get buttonBaseClasses() {
			return buttonBaseClasses;
		},
		get dropdownBaseClasses() {
			return dropdownBaseClasses;
		},
		get searchInputClasses() {
			return searchInputClasses;
		},
		get flagClasses() {
			return flagClasses;
		},
		get checkIconClasses() {
			return checkIconClasses;
		},
		get restProps() {
			return restProps;
		},
		get showFlags() {
			return props.showFlags ?? true;
		},
		get showNativeName() {
			return props.showNativeName ?? false;
		},
		get searchable() {
			return props.searchable ?? true;
		},
		get currentLanguage() {
			return currentLanguage;
		},
		toggleDropdown,
		selectLanguage,
		getLanguageItemClasses
	};
}

export default createLanguageSelectorState;
