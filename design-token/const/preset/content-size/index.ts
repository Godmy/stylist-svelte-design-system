import { RECORD_SPACING } from '$stylist/design-token/const/record/spacing';

export const DESIGN_TOKEN_CONTENT_SIZE = {
	dialog: RECORD_SPACING['32rem'],
	/** Content width of a page (landing sections, page headers). */
	page: '73.75rem',
	gutter: RECORD_SPACING['2rem']
} as const;
