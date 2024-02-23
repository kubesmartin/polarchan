<script>
	import BasePageHeading from '$lib/components/BasePageHeading.svelte';
	import BorderWrap from '$lib/components/BorderWrap.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ItemCreationStep from '$lib/components/ItemCreationStep.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import WidthHolder from '$lib/components/WidthHolder.svelte';

	export let title = 'Create new item';
</script>

<BorderWrap>
	<div class="holder">
		<WidthHolder>
			<Navbar />
			<div class="signup-limiter">
				<BasePageHeading {title} />
				<ItemCreationStep />
			</div>
		</WidthHolder>
	</div>
</BorderWrap>
<Footer />

<style>
	.holder {
		padding: 1.8rem;
	}
	.signup-limiter {
		max-width: 900px;
		margin: 0 auto;
	}
</style>
