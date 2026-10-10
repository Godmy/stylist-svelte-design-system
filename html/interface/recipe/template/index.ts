import type { HTMLTemplateAttributes } from 'svelte/elements';

/** `<template>`: Template. */
export interface RecipeHtmlTemplate extends HTMLTemplateAttributes {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLTemplateElement | null;
}
