<script lang="ts">
	import ItemFilter from '$lib/components/ItemFilter.svelte';
	import LayoutRestricted from '$lib/components/LayoutRestricted.svelte';
	import { getFilterFromUrl } from '$lib/services/filterGetParamService';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import Loader from '$lib/components/Loader.svelte';

	$: filter = browser && getFilterFromUrl($page.url.searchParams);
	export let title = 'Browse items';
</script>

<LayoutRestricted {title}>
	{#if filter}
		<ItemFilter {filter} />
	{:else}
		<Loader />
	{/if}
</LayoutRestricted>
