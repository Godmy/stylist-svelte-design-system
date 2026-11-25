import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLTemplateAttributes } from 'svelte/elements';

/** `<template>`: Template. */
export interface RecipeHtmlTemplate extends ComputeIntersectAll<[HTMLTemplateAttributes]> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLTemplateElement | null;
}
