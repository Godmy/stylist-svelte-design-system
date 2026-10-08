import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotLocaleSwitcher } from '$stylist/localization/interface/slot/locale-switcher';
export interface RecipeLocaleSwitcher extends ComputeIntersectAll<[SlotLocaleSwitcher]> {
	class?: string;
}
