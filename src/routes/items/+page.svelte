<script lang="ts">
	import ItemFilter from '$lib/components/ItemFilter.svelte';
	import LayoutUnrestricted from '$lib/components/LayoutUnrestricted.svelte';
	import { getFilterFromUrl } from '$lib/services/filterGetParamService';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import Loader from '$lib/components/Loader.svelte';
	import { getContext } from 'svelte';
	import type { IAuthService } from '$lib/interfaces/IAuthService';

	$: filter = browser && getFilterFromUrl($page.url.searchParams);
	export let title = 'Browse items';

	const auth: IAuthService = getContext('auth');
	const user = auth.store;
</script>

<LayoutUnrestricted {title}>
	{#if filter}
		<ItemFilter {filter} user={$user} />
	{:else}
		<Loader />
	{/if}
</LayoutUnrestricted>
