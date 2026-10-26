/** Messages of LanguageSelector; ar and he cover its right-to-left presets. */
export const LOCALIZATION_LANGUAGE_SELECTOR_MESSAGE = {
	en: {
		placeholder: 'Select language',
		search: 'Search languages…',
		list: 'Languages',
		empty: 'No languages found',
		count: { one: '{count} language available', other: '{count} languages available' }
	},
	ru: {
		placeholder: 'Выберите язык',
		search: 'Поиск языка…',
		list: 'Языки',
		empty: 'Языки не найдены',
		count: {
			one: 'Доступен {count} язык',
			few: 'Доступно {count} языка',
			many: 'Доступно {count} языков',
			other: 'Доступно {count} языка'
		}
	},
	ar: {
		placeholder: 'اختر اللغة',
		search: 'ابحث عن لغة…',
		list: 'اللغات',
		empty: 'لم يتم العثور على لغات',
		count: {
			zero: 'لا توجد لغات متاحة',
			one: 'لغة واحدة متاحة',
			two: 'لغتان متاحتان',
			few: '{count} لغات متاحة',
			many: '{count} لغة متاحة',
			other: '{count} لغة متاحة'
		}
	},
	he: {
		placeholder: 'בחירת שפה',
		search: 'חיפוש שפה…',
		list: 'שפות',
		empty: 'לא נמצאו שפות',
		count: { one: 'שפה אחת זמינה', two: 'שתי שפות זמינות', other: '{count} שפות זמינות' }
	}
} as const;
