import type { RecipeCountryFlag } from '$stylist/localization/interface/recipe/country-flag';

function countryCodeToEmoji(countryCode: string): string {
	return countryCode
		.toUpperCase()
		.split('')
		.map((char) => String.fromCodePoint(0x1f1e6 - 65 + char.charCodeAt(0)))
		.join('');
}

export function createCountryFlagState(getProps: () => RecipeCountryFlag) {
	const props = $derived(getProps());
	const countryCode = $derived(props.countryCode ?? '');
	const size = $derived(props.size ?? 24);
	const isValid = $derived(Boolean(countryCode && countryCode.length === 2));
	const emoji = $derived(isValid ? countryCodeToEmoji(countryCode) : '');
	const classes = $derived('media__country-flag');
	const style = $derived(`font-size: ${size}px; line-height: 1;`);
	const fallbackStyle = $derived(
		`width: ${size}px; height: ${size}px; font-size: ${size * 0.5}px;`
	);
	const fallbackClasses = $derived('media__country-flag-fallback');

	// Rest props
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
		get isValid() {
			return isValid;
		},
		get classes() {
			return classes;
		},
		get style() {
			return style;
		},
		get fallbackStyle() {
			return fallbackStyle;
		},
		get fallbackClasses() {
			return fallbackClasses;
		},
		get restProps() {
			return restProps;
		}
	};
}
