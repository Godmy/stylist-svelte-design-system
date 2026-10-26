import type { HTMLAttributes } from 'svelte/elements';
import type { RecipeLanguageSelector } from '$stylist/localization/interface/recipe/language-selector';

function createLanguageSelectorState(
	getProps: () => RecipeLanguageSelector & HTMLAttributes<HTMLDivElement>
) {
	const props = $derived(getProps());
	let isOpen = $state(false);
	let searchQuery = $state('');

	const languages = $derived(props.languages ?? []);
	const currentLanguage = $derived(props.currentLanguage);

	const filteredLanguages = $derived.by(() => {
		const query = searchQuery.trim().toLowerCase();
		if (!query) return languages;
		return languages.filter((language) =>
			[language.name, language.nativeName, language.code].some((text) =>
				text?.toLowerCase().includes(query)
			)
		);
	});

	const selectedLanguage = $derived(
		languages.find((language) => language.code === currentLanguage)
	);
	const size = $derived(props.size === 'sm' || props.size === 'lg' ? props.size : 'md');
	const tone = $derived(props.variant && props.variant !== 'default' ? props.variant : 'primary');

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

	function close() {
		isOpen = false;
		searchQuery = '';
	}

	function toggleDropdown() {
		if (isOpen) close();
		else isOpen = true;
	}

	function selectLanguage(code: string) {
		props.onLanguageChange?.(code);
		close();
	}

	return {
		get isOpen() {
			return isOpen;
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
		get size() {
			return size;
		},
		get tone() {
			return tone;
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
		get placement() {
			return props.dropdownPlacement ?? 'bottom';
		},
		get currentLanguage() {
			return currentLanguage;
		},
		close,
		toggleDropdown,
		selectLanguage
	};
}

export default createLanguageSelectorState;
