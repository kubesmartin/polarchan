<script lang="ts">
	import BorderWrap from './BorderWrap.svelte';
	import WidthHolder from './WidthHolder.svelte';
	import Navbar from './Navbar.svelte';
	import Footer from './Footer.svelte';
	import BasePageHeading from './BasePageHeading.svelte';
	import NavbarSecondary from './NavbarSecondary.svelte';

	export let title: string;
</script>

<svelte:head>
	<title>PolARCHAN: {title}</title>
</svelte:head>

<BorderWrap>
	<div class="holder">
		<WidthHolder>
			<header>
				<Navbar />
			</header>
			<div class="grid">
				<div>
					<BasePageHeading {title} />
					<slot />
				</div>
				<div class="secondary-menu">
					<NavbarSecondary />
				</div>
			</div>
		</WidthHolder>
	</div>
</BorderWrap>
<Footer />

<style>
	header {
		margin-bottom: 2.5rem;
	}
	.holder {
		padding: 1.8rem;
	}
	.grid {
		display: grid;
		grid-template-columns: 280px 1fr;
		gap: 4rem;
	}
	.secondary-menu {
		order: -1;
		border-right: 3px solid var(--c-brand);
	}
	@media (max-width: 800px) {
		.grid {
			grid-template-columns: 1fr;
			grid-template-areas: 'main';
		}
		.secondary-menu {
			border-top: 3px solid var(--c-brand);
			border-right: none;
			order: 2;
			padding-top: 2rem;
		}
	}
</style>
