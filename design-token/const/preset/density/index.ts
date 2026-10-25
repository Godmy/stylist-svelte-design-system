import { RECORD_SPACING } from '$stylist/design-token/const/record/spacing';

/** `block`/`inline` pad controls; `scale` multiplies larger spacing such as section padding. */
export const DESIGN_TOKEN_DENSITY = {
	compact: { block: RECORD_SPACING['0.25rem'], inline: RECORD_SPACING['0.5rem'], scale: '0.75' },
	comfortable: { block: RECORD_SPACING['0.5rem'], inline: RECORD_SPACING['0.75rem'], scale: '1' }
} as const;
