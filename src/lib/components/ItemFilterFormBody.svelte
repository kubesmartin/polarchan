<script lang="ts">
	import type { PoliticalItemFilter } from '$lib/types/PoliticalItem/PoliticalItemFilter';
	import NumericalInput from './NumericalInput.svelte';
	import BaseSelect from './BaseSelect.svelte';
	import BaseSelectMultiple from './BaseAutocomplete.svelte';
	import { czechPoliticalSubjects } from '$lib/consts/czechPoliticalSubjects';
	import { electionTypes } from '$lib/consts/electionTypes';
	import { politicalItemTypes } from '$lib/consts/politicalItemTypes';

	export let filter: PoliticalItemFilter;
	export let disabled: boolean = false;

	let typeOptions: { id: string | null; name: string }[] = politicalItemTypes.map((type) => ({
		id: type,
		name: type
			.split('-')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
			.join(' ')
	}));
	typeOptions.unshift({ id: null, name: 'All' });
</script>

<div class="form-body">
	<div class="group">
		<NumericalInput id="yearFrom" label="Year from" bind:value={filter.year.from} {disabled} />
		<NumericalInput id="yearTo" label="Year to" bind:value={filter.year.to} {disabled} />
	</div>
	<div class="group">
		<BaseSelect
			id="country"
			label="Country"
			value={'cz'}
			options={[{ id: 'cz', name: 'Czech Republic' }]}
			disabled
		/>
		<BaseSelect
			id="type"
			label="Type of material"
			bind:value={filter.type}
			options={typeOptions}
			{disabled}
		/>
	</div>
	<div class="group">
		<BaseSelect
			id="orderBy"
			label="Order by"
			bind:value={filter.order.by}
			options={[
				{ id: 'year', name: 'Year' },
				{ id: 'added', name: 'Added' }
			]}
			{disabled}
		/>
		<BaseSelect
			id="orderDirection"
			label="Order direction"
			bind:value={filter.order.direction}
			options={[
				{ id: 'asc', name: 'Ascending' },
				{ id: 'desc', name: 'Descending' }
			]}
			{disabled}
		/>
	</div>
	<BaseSelectMultiple
		id="politicalSubjects"
		label="Political subjects"
		options={czechPoliticalSubjects}
		placeholder="Add subjects to selection by searching official name or abbreviation"
		bind:values={filter.politicalParty}
		noSelectedSettings={{ message: 'All included', color: 'success' }}
		{disabled}
	/>
	<BaseSelectMultiple
		id="typeOfElection"
		label="Type of election"
		bind:values={filter.electionType}
		placeholder="Add election types to selection"
		options={electionTypes}
		noSelectedSettings={{ message: 'All included', color: 'success' }}
		{disabled}
	/>
</div>

<style>
	.form-body {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		width: 100%;
	}
	.group {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}
	@media (max-width: 1200px) {
		.form-body {
			grid-template-columns: 1fr 1fr;
		}
	}
	@media (max-width: 1000px) {
		.form-body {
			grid-template-columns: 1fr;
		}
	}
</style>
