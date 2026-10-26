/** Messages of LocaleSwitcher; ar and he cover its right-to-left presets. */
export const LOCALIZATION_LOCALE_SWITCHER_MESSAGE = {
	en: {
		title: 'Locale settings',
		subtitle: 'Change language, region and formatting preferences',
		locales: 'Language and region',
		preview: 'Date and time preview',
		date: 'Date',
		time: 'Time',
		dateTime: 'Date and time',
		zone: 'Time zone: {zone}',
		zoneLabel: 'Time zone',
		current: 'Locale: {code}',
		count: { one: '{count} locale available', other: '{count} locales available' }
	},
	ru: {
		title: 'Язык и регион',
		subtitle: 'Выберите язык, регион и форматы дат и чисел',
		locales: 'Язык и регион',
		preview: 'Предпросмотр даты и времени',
		date: 'Дата',
		time: 'Время',
		dateTime: 'Дата и время',
		zone: 'Часовой пояс: {zone}',
		zoneLabel: 'Часовой пояс',
		current: 'Локаль: {code}',
		count: {
			one: 'Доступна {count} локаль',
			few: 'Доступно {count} локали',
			many: 'Доступно {count} локалей',
			other: 'Доступно {count} локали'
		}
	},
	ar: {
		title: 'إعدادات اللغة والمنطقة',
		subtitle: 'غيّر اللغة والمنطقة وتنسيقات العرض',
		locales: 'اللغة والمنطقة',
		preview: 'معاينة التاريخ والوقت',
		date: 'التاريخ',
		time: 'الوقت',
		dateTime: 'التاريخ والوقت',
		zone: 'المنطقة الزمنية: {zone}',
		zoneLabel: 'المنطقة الزمنية',
		current: 'اللغة: {code}',
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
		title: 'הגדרות שפה ואזור',
		subtitle: 'שינוי השפה, האזור ותבניות התצוגה',
		locales: 'שפה ואזור',
		preview: 'תצוגה מקדימה של תאריך ושעה',
		date: 'תאריך',
		time: 'שעה',
		dateTime: 'תאריך ושעה',
		zone: 'אזור זמן: {zone}',
		zoneLabel: 'אזור זמן',
		current: 'שפה: {code}',
		count: { one: 'שפה אחת זמינה', two: 'שתי שפות זמינות', other: '{count} שפות זמינות' }
	}
} as const;
