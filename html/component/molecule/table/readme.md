# Table and parser context

The direct component renders its children snippet inside a native `table`.
For SSR followed by hydration, write explicit `thead`, `tbody` and `tfoot`
sections in that snippet. The HTML parser inserts a `tbody` around direct
`tr` children, while a Svelte snippet is opaque to this wrapper: it cannot
normalize arbitrary user components or hydration markers inside it.

`HtmlNodeRenderer` can inspect its structured tree and groups direct `tr`
children in explicit `tbody` elements before both SSR and client rendering.
It preserves explicit sections and does not mutate the supplied tree.

Standalone HTML export remains native HTML serialization; browser parsing
can insert implied sections. Such export is not a Svelte hydration fixture.
