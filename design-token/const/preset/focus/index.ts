import { TOKEN_BORDER_WIDTH } from '$stylist/design-token/const/object/border-width';
import { RECORD_SPACING } from '$stylist/design-token/const/record/spacing';

export const DESIGN_TOKEN_FOCUS = {
	width: TOKEN_BORDER_WIDTH.medium,
	offset: RECORD_SPACING['0.125rem']
} as const;
