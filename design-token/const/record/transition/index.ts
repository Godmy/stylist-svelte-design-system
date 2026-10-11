import { TOKEN_DURATION } from '$stylist/design-token/const/object/duration';
import { TOKEN_EASING } from '$stylist/design-token/const/object/easing';

export const TOKEN_TRANSITION = {
	instant: `all ${TOKEN_DURATION[0]} ${TOKEN_EASING.EASE_IN_OUT}`,
	quick: `all ${TOKEN_DURATION[150]} ${TOKEN_EASING.EASE_IN_OUT}`,
	smooth: `all ${TOKEN_DURATION[200]} ${TOKEN_EASING.EASE_IN_OUT}`,
	gentle: `all ${TOKEN_DURATION[300]} ${TOKEN_EASING.EASE_IN_OUT}`,
	emphasized: `all ${TOKEN_DURATION[400]} cubic-bezier(0.2, 0, 0, 1)`
} as const;
