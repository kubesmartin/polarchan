<script lang="ts">
	import LayoutRestricted from '$lib/components/LayoutRestricted.svelte';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import Loader from '$lib/components/Loader.svelte';
	import { getPoliticalItem } from '$lib/models/politicalItemModel';
	import ItemView from '$lib/components/ItemView.svelte';

	$: id = browser && $page.url.searchParams.get('id');
	export let title = 'Item detail';

	$: itemPromise = typeof id === 'string' ? getPoliticalItem(id) : null;
</script>

<LayoutRestricted {title}>
	{#if itemPromise !== null}
		{#await itemPromise}
			{id}
			<Loader />
		{:then item}
			<ItemView {item} />
		{:catch error}
			<p>{error.message}</p>
		{/await}
	{:else}
		<Loader />
	{/if}
</LayoutRestricted>
