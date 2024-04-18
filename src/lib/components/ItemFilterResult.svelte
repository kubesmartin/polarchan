<script lang="ts">
	import ItemPreview from './ItemPreview.svelte';
	import { getPoliticalItemsByFilter } from '../models/politicalItemModel';
	import type { PoliticalItemFilter } from '$lib/types/PoliticalItem/PoliticalItemFilter';
	import type { QueryDocumentSnapshot } from 'firebase/firestore';
	import { writable } from 'svelte/store';
	import type { PoliticalItem } from '$lib/types/PoliticalItem/PoliticalItem';
	import type { Writable } from 'svelte/store';
	import ButtonBase from './ButtonBase.svelte';
	import Loader from './Loader.svelte';

	export let filter: PoliticalItemFilter;
	export let FETCH_LIMIT = 12;

	let previousFilter = JSON.stringify(filter); // Store the previous filter for comparison

	let lastVisible: QueryDocumentSnapshot | null = null;
	let items: Writable<PoliticalItem[] | false> = writable(false); // Use a writable store for items
	let noMoreItems = false;

	let error: string | null = null;

	// Initial fetch
	async function fetchItems() {
		try {
			const savedItems = $items ? $items : []; // If items is not defined, set it to an empty arra
			const query = await getPoliticalItemsByFilter(filter, lastVisible, FETCH_LIMIT);
			lastVisible = query.lastVisible;
			const newItems = query.items;
			if (newItems.length === 0) {
				noMoreItems = true;
			} else {
				noMoreItems = false;
			}
			items.set([...savedItems, ...newItems]);
		} catch (error) {
			items.set([]);
			if (error instanceof Error) {
				error = error.message;
			} else {
				error = 'An unknown error occurred';
			}
		}
	}

	// Trigger initial fetch
	fetchItems();

	$: {
		const currentFilter = JSON.stringify(filter);
		if (previousFilter !== currentFilter) {
			lastVisible = null; // Reset pagination
			items.set(false); // Clear items before fetching new ones
			fetchItems();
			previousFilter = currentFilter; // Update the previous filter for next comparison
		}
	}
</script>

<div class="main">
	<h2>Results</h2>
	{#if $items}
		{#if $items.length > 0}
			<ul>
				{#each $items as politicalItem (politicalItem.id)}
					<ItemPreview {politicalItem} />
				{/each}
			</ul>
			{#if !noMoreItems}
				<ButtonBase on:click={fetchItems}>Load more</ButtonBase>
			{:else}
				<p>No more items found. Total count for this query: {$items.length}</p>
			{/if}
		{:else}
			<p>No items found</p>
		{/if}
	{:else}
		<Loader />
	{/if}

	{#if error}
		<p>
			{error}
		</p>
	{/if}
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
		display: grid;
		gap: 2rem;
		grid-template-columns: repeat(auto-fill, 200px);
	}
</style>
