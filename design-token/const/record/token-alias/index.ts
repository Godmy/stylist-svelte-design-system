/**
 * Legacy custom property names still read outside the library, mapped to the global scale
 * token that replaces them. The theme emits every name it does not already emit as
 * `var(<token>)`; once the last reader moves to the token, its entry goes away.
 */
export const RECORD_TOKEN_ALIAS: Record<string, string> = {
	// lankatour.ru admin-cabinet; the prefixed --layout-spacing-* emission still serves it.
	'--layout-spacing-1rem': '--space-4'
};
