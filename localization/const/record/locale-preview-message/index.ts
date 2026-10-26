/**
 * Messages of LocalePreview. Besides the required en/ru it carries ka, es, zh, hi, ar and he
 * to show fallback-free scripts, plural rules (Arabic has six forms) and right-to-left text.
 */
export const LOCALIZATION_LOCALE_PREVIEW_MESSAGE = {
	en: {
		heading: 'Language preview',
		files: { one: '{count} file selected', other: '{count} files selected' },
		today: 'Today: {date}',
		total: 'Total: {amount}',
		direction: 'Text direction: {dir}',
		next: 'Next'
	},
	ru: {
		heading: 'Предпросмотр языка',
		files: {
			one: 'Выбран {count} файл',
			few: 'Выбрано {count} файла',
			many: 'Выбрано {count} файлов',
			other: 'Выбрано {count} файла'
		},
		today: 'Сегодня: {date}',
		total: 'Итого: {amount}',
		direction: 'Направление текста: {dir}',
		next: 'Далее'
	},
	ka: {
		heading: 'ენის გადახედვა',
		files: { other: 'არჩეულია {count} ფაილი' },
		today: 'დღეს: {date}',
		total: 'სულ: {amount}',
		direction: 'ტექსტის მიმართულება: {dir}',
		next: 'შემდეგი'
	},
	es: {
		heading: 'Vista previa del idioma',
		files: {
			one: '{count} archivo seleccionado',
			other: '{count} archivos seleccionados'
		},
		today: 'Hoy: {date}',
		total: 'Total: {amount}',
		direction: 'Dirección del texto: {dir}',
		next: 'Siguiente'
	},
	zh: {
		heading: '语言预览',
		files: { other: '已选择 {count} 个文件' },
		today: '今天：{date}',
		total: '合计：{amount}',
		direction: '文字方向：{dir}',
		next: '下一步'
	},
	hi: {
		heading: 'भाषा पूर्वावलोकन',
		files: { one: '{count} फ़ाइल चुनी गई', other: '{count} फ़ाइलें चुनी गईं' },
		today: 'आज: {date}',
		total: 'कुल: {amount}',
		direction: 'पाठ की दिशा: {dir}',
		next: 'आगे'
	},
	ar: {
		heading: 'معاينة اللغة',
		files: {
			zero: 'لم يتم اختيار أي ملف',
			one: 'تم اختيار ملف واحد',
			two: 'تم اختيار ملفين',
			few: 'تم اختيار {count} ملفات',
			many: 'تم اختيار {count} ملفًا',
			other: 'تم اختيار {count} ملف'
		},
		today: 'اليوم: {date}',
		total: 'المجموع: {amount}',
		direction: 'اتجاه النص: {dir}',
		next: 'التالي'
	},
	he: {
		heading: 'תצוגה מקדימה של השפה',
		files: { one: 'נבחר קובץ אחד', two: 'נבחרו שני קבצים', other: 'נבחרו {count} קבצים' },
		today: 'היום: {date}',
		total: 'סה״כ: {amount}',
		direction: 'כיוון הטקסט: {dir}',
		next: 'הבא'
	}
} as const;
