<script lang="ts">
	import type { PoliticalItemFilter } from '$lib/types/PoliticalItem/PoliticalItemFilter';
	import { goto } from '$app/navigation';
	import { getFilterUrl } from '$lib/services/filterGetParamService';
	import NumericalInput from './NumericalInput.svelte';
	import BaseSelect from './BaseSelect.svelte';
	import BaseSelectMultiple from './BaseAutocomplete.svelte';
	import { czechPoliticalSubjects } from '$lib/consts/czechPoliticalSubjects';
	import { politicalItemTypes } from '$lib/consts/politicalItemTypes';
	import { electionTypes } from '$lib/consts/electionTypes';
	import ButtonBase from './ButtonBase.svelte';

	export let filter: PoliticalItemFilter;

	const submit = () => {
		console.log(filter);
		const parameters = getFilterUrl(filter);
		goto(`/items?${parameters}`);
	};

	let typeOptions: { id: string | null; name: string }[] = politicalItemTypes.map((type) => ({
		id: type,
		name: type
			.split('-')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
			.join(' ')
	}));
	typeOptions.unshift({ id: null, name: 'All' });
</script>

<form on:submit|preventDefault={submit}>
	<h2>Query Parameters</h2>
	<div class="form-body">
		<div class="group">
			<NumericalInput id="yearFrom" label="Year from" bind:value={filter.year.from} />
			<NumericalInput id="yearTo" label="Year to" bind:value={filter.year.to} />
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
			/>
			<BaseSelect
				id="orderDirection"
				label="Order direction"
				bind:value={filter.order.direction}
				options={[
					{ id: 'asc', name: 'Ascending' },
					{ id: 'desc', name: 'Descending' }
				]}
			/>
		</div>
		<BaseSelectMultiple
			id="politicalSubjects"
			label="Political subjects"
			options={czechPoliticalSubjects}
			placeholder="Add subjects to selection by searching official name or abbreviation"
			bind:values={filter.politicalParty}
			noSelectedSettings={{ message: 'All included', color: 'success' }}
		/>
		<BaseSelectMultiple
			id="typeOfElection"
			label="Type of election"
			bind:values={filter.electionType}
			placeholder="Add election types to selection"
			options={electionTypes}
			noSelectedSettings={{ message: 'All included', color: 'success' }}
		/>
	</div>
	<ButtonBase type="submit">Filter</ButtonBase>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
		border-top: 3px solid var(--c-brand);
	}
	.form-body {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		width: 100%;
	}
	h2 {
		margin: 0;
		color: var(--c-brand);
	}
	.group {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}
</style>
