<script lang="ts">
	import LayoutUnrestricted from '$lib/components/LayoutUnrestricted.svelte';
	import Loader from '$lib/components/Loader.svelte';
	import { getContext } from 'svelte';
	import type { IAuthService } from '$lib/interfaces/IAuthService';
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import { base } from '$app/paths';

	export let title = 'Log out';
	const auth = getContext<IAuthService>('auth');
</script>

<LayoutUnrestricted {title}>
	{#await auth.logout()}
		<Loader />
	{:then}
		<p>Succesfully logged out! You can now return to the home page or log in again.</p>
		<div class="controls">
			<ButtonLink href={base + '/'}>Home</ButtonLink>
			<ButtonLink href={base + '/login'}>Login</ButtonLink>
		</div>
	{:catch error}
		<p>{error.message}</p>
	{/await}
</LayoutUnrestricted>

<style>
	.controls {
		margin-top: 2rem;
	}
</style>
