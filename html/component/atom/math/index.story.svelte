<script lang="ts">
	import HtmlMath from '$stylist/html/component/atom/math/index.svelte';
	import type { RecipeHtmlMath } from '$stylist/html/interface/recipe/math';

	// Render of index.story.ts: MathML content cannot be expressed as an HtmlNode tree.
	let args: RecipeHtmlMath = $props();
</script>

<HtmlMath {...args}>
	<mi>x</mi>
	<mo>=</mo>
	<mfrac>
		<mrow
			><mo>−</mo><mi>b</mi><mo>±</mo><msqrt
				><msup><mi>b</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>a</mi><mi>c</mi></msqrt
			></mrow
		>
		<mrow><mn>2</mn><mi>a</mi></mrow>
	</mfrac>
</HtmlMath>
