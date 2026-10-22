import { RECORD_SPACING } from '$stylist/design-token/const/record/spacing';

export const DESIGN_TOKEN_DENSITY = {
	compact: { block: RECORD_SPACING['0.25rem'], inline: RECORD_SPACING['0.5rem'] },
	comfortable: { block: RECORD_SPACING['0.5rem'], inline: RECORD_SPACING['0.75rem'] }
} as const;
