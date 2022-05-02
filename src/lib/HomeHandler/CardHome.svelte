<script>
	export let document;
	// import { document } from '../../routes/index';
</script>

<img src="zacharyWiebeLogo1.svg" alt="zWeb Logo" style="" class="" />
<div class="info-wrapper">
	<p class="card-title mb-10">{document.data.title}</p>
	<!-- <div class="p-5">
		<div class="flex pl-20">
			<p class="font-semibold">Phone:</p>
			<p>&nbsp;<a href="tel:204-698-4613">1-204-698-4613</a></p>
		</div>
		<div class="flex pl-20">
			<p class="font-semibold">Email:</p>
			<p>&nbsp;<a href="mailto: zach@zachw.ca">zach@zachw.ca</a></p>
		</div>
	</div> -->
</div>
<slot />

<style>
	img {
		width: 100%;
		padding: 40px 30px 40px 30px;
	}
	.card-title {
		text-align: center;
		font-size: 1.25rem;
		line-height: 1.75rem;
	}
	.info-wrapper {
		padding-left: 1.25rem;
		padding-right: 1.25rem;
	}
</style>
