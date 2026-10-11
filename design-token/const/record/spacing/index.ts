import { TOKEN_SIZE_REM } from '../../array/size-rem';

export const RECORD_SPACING = Object.fromEntries(
	TOKEN_SIZE_REM.map((size) => [size, size] as const)
) as { [Size in (typeof TOKEN_SIZE_REM)[number]]: Size };
