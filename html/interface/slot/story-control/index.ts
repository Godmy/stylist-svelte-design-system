/** One control of the story panel; the key in `ContractStory.controls` is the arg name. */
export interface SlotStoryControl {
	/** `json` edits arrays and objects as JSON text; an invalid value is not applied. */
	type: 'text' | 'number' | 'boolean' | 'select' | 'range' | 'color' | 'json';
	label?: string;
	description?: string;
	options?: readonly (string | number)[];
	min?: number;
	max?: number;
	step?: number;
	/** `json`: the shape hint shown as the placeholder; the value must match its kind. */
	example?: unknown;
}
