<script>
	import HomeHandler from '$lib/HomeHandler/HomeHandler.svelte';
	import * as prismicH from '@prismicio/helpers';

	export let document;

	let mouse = { x: 0, y: 0 };
</script>

<p>{document.data.title}</p>
<!-- {console.log(document)} -->
<!-- {@html prismicH.asHTML(document.data.content)} -->

<div class="background1">
	<img src="whitegrit.png" class="background2" alt="texture" />
	<div class="content">
		<HomeHandler {mouse} />
	</div>
</div>

<style>
	.background1 {
		overflow: hidden;
		position: relative;
		background: black;
		/* background-color: #a55c1b; */
		background-image: linear-gradient(315deg, #303030 0%, #000000 90%);
	}
	.background2 {
		background: black;
		opacity: 0.4;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: auto;
		background-size: 10%;
	}
	.content {
		position: relative;
	}
</style>
