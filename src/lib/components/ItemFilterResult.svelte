<script lang="ts">
	import ItemPreview from './ItemPreview.svelte';
	import { getPoliticalItemsByFilter } from '../models/politicalItemModel';
	import type { PoliticalItemFilter } from '$lib/types/PoliticalItem/PoliticalItemFilter';

	export let filter: PoliticalItemFilter;
</script>

<div class="main">
	<h2>Results</h2>
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
