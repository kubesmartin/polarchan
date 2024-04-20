<script>
	import SignInForm from '$lib/components/SignInForm.svelte';
</script>

<svelte:head>
	<title>PolARCHAN: Login</title>
	<meta name="description" content="Log in to the PolARCHAN system" />
</svelte:head>

<div class="background">
	<img src="bg_login.jpg" alt="" />
	<div></div>
	<div class="sign-in-container">
		<SignInForm />
	</div>
</div>

<style>
	.background {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background: var(--c-brand);
		display: grid;
		grid-template-columns: 3fr 1fr;
		position: relative;
	}

	.background img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.65;
		filter: blur(1px);
	}

	.sign-in-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: absolute;
		width: 50%;
		height: 100%;
		right: 0;
		top: 0;
	}
	@media (max-width: 1024px) {
		.background {
			grid-template-columns: 1fr;
		}
		.sign-in-container {
			width: 100%;
		}
		.background img {
			max-height: calc(50vh + 125px);
		}
	}
</style>
