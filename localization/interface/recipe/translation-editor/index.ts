import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotExtendedTranslationEditor } from '$stylist/localization/interface/slot/extended-translation-editor';
export interface RecipeTranslationEditor
	extends ComputeIntersectAll<
		[
			{
				sourceText?: string;
				targetLocale?: string;
				class?: string;
			},
			SlotExtendedTranslationEditor
		]
	> {
	class?: string;
}
