import type { RecipeCountryFlag } from '$stylist/localization/interface/recipe/country-flag';

/** Regional indicator symbols of a two-letter code: `GE` → 🇬🇪. */
function countryCodeToEmoji(countryCode: string): string {
	return countryCode
		.toUpperCase()
		.split('')
		.map((char) => String.fromCodePoint(0x1f1e6 - 65 + char.charCodeAt(0)))
		.join('');
}

/** Country name in the interface language (`DE` → `Germany`, `Германия`), else the code. */
function countryName(countryCode: string, locale: string): string {
	try {
		return new Intl.DisplayNames([locale, 'en'], { type: 'region' }).of(countryCode) ?? countryCode;
	} catch {
		return countryCode;
	}
}

export function createCountryFlagState(getProps: () => RecipeCountryFlag, getLocale: () => string) {
	const props = $derived(getProps());
	const countryCode = $derived((props.countryCode ?? '').toUpperCase());
	const size = $derived(props.size ?? 24);
	const isValid = $derived(/^[A-Z]{2}$/.test(countryCode));
	const emoji = $derived(isValid ? countryCodeToEmoji(countryCode) : '');
	const country = $derived(isValid ? countryName(countryCode, getLocale()) : '');

	const restProps = $derived.by(() => {
		const {
			class: _class,
			countryCode: _countryCode,
			size: _size,
			content: _content,
			...rest
		} = props;
		return rest;
	});

	return {
		get countryCode() {
			return countryCode;
		},
		get size() {
			return size;
		},
		get emoji() {
			return emoji;
		},
		get country() {
			return country;
		},
		get isValid() {
			return isValid;
		},
		get restProps() {
			return restProps;
		}
	};
}
