import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLAudioAttributes } from 'svelte/elements';

/** `<audio>`: Audio player. */
export interface RecipeHtmlAudio extends ComputeIntersectAll<[HTMLAudioAttributes]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLAudioElement | null;
}
