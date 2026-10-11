# Design-token: контракт покрытия HTML

Домен содержит определения и аудит потребностей токенов. Он не управляет темой и не зависит от runtime HTML или sandbox. Существующие значения шкал пока принадлежат theme; копий палитр и шкал здесь нет. Перенос их реализации требует отдельной согласованной миграции зависимостей.

## Текущее наблюдаемое покрытие

`data/json/html-requirement/index.json` — снимок текущего `html/const/array/html-style`: 57 правил, 93 ссылки `var()`, 43 уникальных имени. Для каждой ссылки сохранены selector targets, state, pseudo-element, CSS property и исходное значение. `const/record/html-requirement` предоставляет снимок как данные библиотеки.

`function/resolve/style-token-usage` извлекает эти связи из переданных правил. `function/check/style-token-coverage` сравнивает потребности с переменными, выданными любым provider; fallback не считается определённым токеном. Тест проверяет точное соответствие снимка живому HTML_STYLE, поэтому изменение соседней сессией skin делает устаревание карты заметным.

Светлая и тёмная тема сейчас выдают 42/43 требуемых переменных. `--font-mono` отсутствует. `const/preset/html-supplement` определяет это значение и закрывает текущий пробел при явном подключении. Наличие preset не означает, что песочница автоматически его подключила.

Пример интеграции там, где устанавливаются CSS-переменные окружения:

```ts
const vars = {
  ...DESIGN_TOKEN_HTML_SUPPLEMENT,
  ...ManagerThemeCSS.convertToCSSVars(theme)
};
ManagerThemeCSS.setVars(vars, previewRoot);
```

Theme overrides идут последними. HTML skin остаётся потребителем `var(--name, fallback)`. Контракт story `args/controls` описывает props компонента; CSS-переменные окружения нельзя молча передавать туда как новые HTML-атрибуты. Общие theme/token controls должны настраивать корень preview. Нативные `class`/`style` остаются возможностью локального переопределения.

## Какое покрытие следует предусмотреть

| Содержимое внутри HTML | Сейчас используется | Требуется дальше |
|---|---|---|
| Текст, заголовки, подписи | family, size, weight, line-height, letter-spacing, text colors | Пресеты body/heading/caption/code; шрифт mono; относительная шкала small/figcaption; underline thickness/offset |
| Списки и вложенная композиция | spacing, marker color, блоковый ритм | Плотность compact/comfortable, gap и logical indentation без индивидуальной палитры на каждый тег |
| Таблицы | cell padding, borders, caption/text colors, header weight/background | Токены ширины границы; density; caption preset. caption-side, align и collapse — настройки композиции, не шкала значений темы |
| Поля и кнопки | text/background/border/accent/on-primary, radius, spacing | Placeholder, readonly, active, selected; общие focus width/offset и размеры элементов. Проверка доступности отдельна от наличия токенов |
| Disclosure, dialog | spacing, radius, modal elevation, backdrop | Semantic content/dialog widths, overlay stacking, состояния, easing и reduced-motion. showModal/open — native behavior, не токены |
| Изображения, video, canvas, SVG root | Ограничение max-width и auto height задано структурно | Пресеты aspect ratio/object-fit/content width при появлении API медиа; не превращать auto/100%/inherit в токены без причины |
| Metadata, raw-text, foreign content | Служебные элементы не требуют своего визуального набора | Не добавлять фиктивные font controls к base/meta/script. SVG/MathML требуют отдельного контракта для содержимого, не одной общей HTML-шкалы |

`proposedCoverage` в JSON — предположение о необходимых семействах и приоритетах, а не реализованные значения. P0: typography/color/spacing, P1: border/state-motion/layout-media, P2: особые namespace и служебные случаи. Токены представляют повторяемое дизайн-решение; структурные CSS-значения и native behavior остаются в своих контрактах.

## Границы доменов и дальнейшая миграция

- design-token: общие шкалы, типы значений, metadata и аудит потребителей; без provider/storage/переключателей темы.
- theme: тематические назначения и значения, light/dark, применение переменных, context и storage.
- typography и остальные компонентные домены: contracts/recipes оформления и семантические presets, собираемые из общих токенов.
- html: категории, native элементы и открытая композиция; skin использует CSS-переменные.
- sandbox/token: UI для просмотра и настройки; не владелец базовых определений.

Сначала перенести из theme базовые шкалы font/size/weight/line-height/spacing/radius/opacity/motion с полной картой потребителей. Затем обновить theme и component imports. Не копировать определения, не вводить зависимость design-token от theme. Текущая связь с theme есть только в тесте интеграции. Отступы с точкой в имени сохраняются совместимыми; переименование требует синхронной миграции эмиттера и всех потребителей.

Текущее покрытие — покрытие имён переменных, не всех CSS-параметров, UI-состояний, браузеров или доступности. Обновление снимка: `node scripts/write-design-token-coverage.mjs`. Проверка: `yarn exec vitest run --config scripts/design-token-vitest.config.mjs --configLoader native`.
