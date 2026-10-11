import { TOKEN_EASING } from '$stylist/design-token/const/object/easing';

export type TokenEasing = (typeof TOKEN_EASING)[keyof typeof TOKEN_EASING];
