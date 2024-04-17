<script lang="ts">
	import { getPoliticalItemsByFilter } from '$lib/models/politicalItemModel';
	import type { PoliticalItemFilter } from '$lib/types/PoliticalItem/PoliticalItemFilter';
	import ItemPreview from './ItemPreview.svelte';
	import WidthHolder from './WidthHolder.svelte';

	const baseFilter: PoliticalItemFilter = {
		type: null,
		year: {
			from: null,
			to: null
		},
		politicalParty: [],
		electionType: [],
		order: {
			by: 'added',
			direction: 'desc'
		}
	};

	const items = getPoliticalItemsByFilter(baseFilter, null, 4);
</script>

<div class="outer">
	<WidthHolder>
		<h2>Newest items archived in polARCHAN</h2>
		<div class="inner">
			{#await items}
				<div class="placeholder" />
				<div class="placeholder" />
				<div class="placeholder" />
				<div class="placeholder" />
			{:then data}
				{#each data.items as politicalItem}
					<ItemPreview {politicalItem} maxWidth="100%" />
				{/each}
			{:catch error}
				<p>{error.message}</p>
			{/await}
		</div>
	</WidthHolder>
</div>

<style>
	.outer {
		padding: 2.6rem;
	}
	.inner {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-gap: 1.8rem;
	}
	h2 {
		margin: 0;
		padding: 0;
		font-size: 2.4rem;
		color: var(--c-brand);
		margin-bottom: 2rem;
	}
	.placeholder {
		background-color: #ccc;
		padding-top: 100%;
		width: 100%;
	}
	.placeholder::after {
		content: '';
		display: block;
		width: 100%;
		height: 69px;
	}
	@media (max-width: 1000px) {
		.inner {
			grid-template-columns: 1fr 1fr;
		}
		@media (max-width: 600px) {
			h2 {
				font-size: 1.8rem;
			}
		}
		@media (max-width: 400px) {
			h2 {
				font-size: 1.25rem;
			}
		}
	}
</style>
