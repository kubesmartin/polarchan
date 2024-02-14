<script>
	import BasePageHeading from '$lib/components/BasePageHeading.svelte';
	import BorderWrap from '$lib/components/BorderWrap.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import SignUpStep from '$lib/components/SignUpStep.svelte';
	import WidthHolder from '$lib/components/WidthHolder.svelte';

	export let title = 'Registration to PolARCHAN system';
</script>

<BorderWrap>
	<div class="holder">
		<WidthHolder>
			<Navbar />
			<div class="signup-limiter">
				<BasePageHeading {title} />
				<SignUpStep />
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
