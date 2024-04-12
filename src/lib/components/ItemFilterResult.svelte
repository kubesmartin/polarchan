<script lang="ts">
	import ItemPreview from './ItemPreview.svelte';
	import { getPoliticalItemsByFilter } from '../models/politicalItemModel';
	import type { PoliticalItemFilter } from '$lib/types/PoliticalItem/PoliticalItemFilter';
	import type { QueryDocumentSnapshot } from 'firebase/firestore';
	import { writable } from 'svelte/store';
	import type { PoliticalItem } from '$lib/types/PoliticalItem/PoliticalItem';
	import type { Writable } from 'svelte/store';
	import ButtonBase from './ButtonBase.svelte';

	export let filter: PoliticalItemFilter;
	let previousFilter = JSON.stringify(filter); // Store the previous filter for comparison

	let lastVisible: QueryDocumentSnapshot | null = null;
	let items: Writable<PoliticalItem[]> = writable([]); // Use a writable store for items

	const FETCH_LIMIT = 2;

	// Initial fetch
	async function fetchItems() {
		try {
			const query = await getPoliticalItemsByFilter(filter, lastVisible, FETCH_LIMIT);
			lastVisible = query.lastVisible;
			items.update((currentItems) => [...currentItems, ...query.items]);
		} catch (error) {
			items.set([]);
			// TODO: Handle error
			throw error;
		}
	}

	// Trigger initial fetch
	fetchItems();

	$: {
		const currentFilter = JSON.stringify(filter);
		if (previousFilter !== currentFilter) {
			lastVisible = null; // Reset pagination
			items.set([]); // Clear items before fetching new ones
			fetchItems();
			previousFilter = currentFilter; // Update the previous filter for next comparison
		}
	}
</script>

<div class="main">
	<h2>Results</h2>
	{#await $items}
		<p>Loading...</p>
	{:then fetchedItems}
		{#if fetchedItems.length > 0}
			<ul>
				{#each fetchedItems as politicalItem (politicalItem.id)}
					<ItemPreview {politicalItem} />
				{/each}
			</ul>
			<ButtonBase on:click={fetchItems}>Load more</ButtonBase>
		{:else}
			<p>No items found</p>
		{/if}
	{:catch error}
		<p>{error.message}</p>
	{/await}
</div>

<style>
	.main {
		display: flex;
		flex-direction: column;
		border-top: 3px solid var(--c-brand);
	}
	h2 {
		margin: 0;
		color: var(--c-brand);
	}
	ul {
		list-style-type: none;
		padding: 0;
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}
</style>
