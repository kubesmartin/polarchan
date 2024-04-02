<script lang="ts">
	import ItemFilter from '$lib/components/ItemFilter.svelte';
	import ItemPreview from '$lib/components/ItemPreview.svelte';
	import LayoutRestricted from '$lib/components/LayoutRestricted.svelte';
	import { getPoliticalItemsByFilter } from '$lib/models/politicalItemModel';
	import type { PoliticalItemFilter } from '$lib/types/PoliticalItem/PoliticalItemFilter';
	import { getFilterFromUrl } from '$lib/services/filterGetParamService';
	import { page } from '$app/stores';

	$: filter = getFilterFromUrl($page.url.searchParams);
	console.log(filter);

	export let title = 'Browse items';
</script>

<LayoutRestricted {title}>
	<ItemFilter {filter} />
	{#await getPoliticalItemsByFilter(filter)}
		<p>Loading...</p>
	{:then items}
		<ul>
			{#each items as politicalItem (politicalItem.id)}
				<ItemPreview {politicalItem} />
			{/each}
		</ul>
	{:catch error}
		<p>{error.message}</p>
	{/await}
</LayoutRestricted>
