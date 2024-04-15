<script lang="ts">
	import BorderWrap from './BorderWrap.svelte';
	import WidthHolder from './WidthHolder.svelte';
	import Navbar from './Navbar.svelte';
	import Footer from './Footer.svelte';
	import BasePageHeading from './BasePageHeading.svelte';
	import NavbarSecondary from './NavbarSecondary.svelte';
	import { getContext } from 'svelte';
	import type { IAuthService } from '$lib/interfaces/IAuthService';
	import Loader from './Loader.svelte';
	import ButtonLink from './ButtonLink.svelte';

	export let title: string;

	const auth: IAuthService = getContext('auth');
	const user = auth.store;
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
					{#if $user === null}
						<Loader />
					{:else if $user === false}
						<p>You are not logged in. Please sign in to access this page.</p>
						<ButtonLink href="/login">Log in</ButtonLink>
					{:else}
						<slot />
					{/if}
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
		grid-template-areas: 'secondary main';
	}
	.secondary-menu {
		grid-area: secondary;
		border-right: 3px solid var(--c-brand);
	}
</style>
