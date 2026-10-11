import { TOKEN_ANIMATION } from '$stylist/design-token/const/object/animation';

export type TokenAnimation = (typeof TOKEN_ANIMATION)[keyof typeof TOKEN_ANIMATION];
