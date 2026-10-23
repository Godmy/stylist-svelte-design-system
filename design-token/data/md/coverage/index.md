# Design-token: определения и покрытие HTML skin

Обновлено 2026-10-11. Общие шкалы перенесены из theme вместе с зависимыми Token* типами. Их единственный физический владелец — design-token. Runtime этого домена не импортирует theme/html/sandbox; интеграционные тесты могут читать их.

## Наблюдаемое покрытие

HTML_STYLE содержит 63 правила, 129 ссылок var() и 61 уникальное имя. JSON snapshot содержит selector/state/pseudo/media/property/value для каждой ссылки. Light и dark emitters покрывают 61/61 имя без supplement и без разрешённого gap mono. Тесты также проверяют значения family, color, spacing, density, focus и duration, а stylesheet — строгий CSS parser. Для mark светлый warning-100 сочетается с тёмным warning-900 в обеих темах; наследование цвета текста здесь нарушало контраст в dark mode.

TOKEN_FONT_FAMILY.mono имеет одного владельца; ManagerThemeCSS выдаёт --font-mono напрямую из него. DESIGN_TOKEN_HTML_SUPPLEMENT сохранён как совместимый preset, производный от того же определения, и больше не является обязательным исправлением provider.

## Ответственность доменов

- design-token: palette/scales, font family/size/weight/line-height/tracking, spacing/size, radius/border/focus, opacity, duration/easing/transition, gradients/elevation/z-index, density/content presets, независимый аудит потребителей.
- theme: light/dark и схемы брендов, semantic assignments, runtime CSS emitter, provider/context/storage и выбор темы. THEME_LAYOUT, INTERACTION_MOTION и LAYOUT_ELEVATION_SEMANTIC используют определения design-token.
- typography: SlotTypography и CSS presets body/heading/caption/code. Skin использует эти presets. Theme не импортирует typography: дополнительная обратная зависимость не введена.
- html: native wrappers, дерево/context/outlet и skin. Scope, @layer html, :where(), fallbacks и экранирование точек в CSS variable names сохранены.
- sandbox/domain: отдельный serializable ContractPreviewEnvironment, controls и iframe применение; settings не spread-ятся в args HTML-компонента. sandbox/token остаётся владельцем существующего редактора токенов библиотеки.

## Реальные потребители

| Семейство       | Подключено                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Typography      | body/heading/caption/code presets; sans/serif/mono, size/weight/line-height/tracking; font controls меняют preview scope |
| Colors          | text/background/border/accent/on-accent/error/backdrop; light/dark, links hover/active, placeholder, selected option     |
| Spacing/density | существующая шкала с совместимыми именами; compact/comfortable padding для таблиц, полей и кнопок                        |
| Border/focus    | thin/medium/thick, radius, focus-visible width/offset                                                                    |
| States/motion   | hover/active/focus-visible/disabled/user-invalid/readonly/selected/placeholder; duration/easing и prefers-reduced-motion |
| Layout          | dialog width/gutter, modal shadow/z-index/backdrop; открытие dialog по-прежнему native, open не означает showModal       |

Структурные auto/100%/inherit и native behavior не превращены в отдельные токены. Media aspect-ratio/object-fit и внутренние SVG/MathML tokens отложены: текущие stories не имеют соответствующего настраиваемого HtmlNode-контракта. Foreign custom renders и metadata не получают фиктивных appearance controls.

## Preview: порядок и reset

Родительская тема зеркалируется существующим viewport protocol на documentElement iframe. Явный preview mode устанавливает light/dark variables на skin root. Font/size/line-height/density overrides идут последними. Пустые настройки наследуют текущую тему; effect cleanup снимает старые variables при reset, смене настроек и отключении skin.

Skin включается только у visual HTML stories, переключается в native mode и не оформляет shell или stories других доменов. Node custom render использует host skin, без собственного независимого stylesheet. Standalone /preview использует собственный ThemeProvider и не ожидает parent для ready.

## Проверки и генерация

Snapshot обновляется `node scripts/write-design-token-coverage.mjs`; native resolver maintenance script использует реальные module owners. Source tests и проверка CSS не требуют generated barrels. Перенесённые определения и новые preview components требуют человеческой регенерации `yarn stylist:index` / `yarn stylist:manifest` из lankatour.ru по AGENTS.md. До неё public root exports и полная integration остаются pending.
