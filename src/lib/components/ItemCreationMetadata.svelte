<script lang="ts">
	import { czechPoliticalSubjects } from '$lib/consts/czechPoliticalSubjects';
	import { electionTypes } from '$lib/consts/electionTypes';
	import type { Writable } from 'svelte/store';
	import BaseInput from './BaseInput.svelte';
	import BaseSelectMultiple from './BaseAutocomplete.svelte';
	import { createEventDispatcher } from 'svelte';
	import type { PoliticalItemForm } from '$lib/stores/itemCreationStore';
	import SubmitHolder from './SubmitHolder.svelte';
	import BaseSelect from './BaseSelect.svelte';
	import NumericalInput from './NumericalInput.svelte';

	const dispatch = createEventDispatcher();

	export let store: Writable<PoliticalItemForm>;

	let errors: string[] = [];

	const submit = () => {
		console.log($store);
		if (
			!$store.country ||
			!$store.typeOfElectionId ||
			!$store.politicalSubjectIds.length ||
			!$store.electionYear
		) {
			errors = ['Please fill in all required fields'];
			return;
		}
		errors = [];
		dispatch('validSubmit');
	};
</script>

<form on:submit|preventDefault={submit}>
	<BaseSelect
		id="country"
		label="Country"
		bind:value={$store.country}
		required
		disabled
		options={[{ id: 'cz', name: 'Czech Republic' }]}
	/>
	<BaseSelect
		id="electionType"
		label="Election type"
		options={electionTypes}
		required
		placeholder="Select the country's election type"
		bind:value={$store.typeOfElectionId}
	/>
	<NumericalInput
		id="electionYear"
		label="Election year"
		bind:value={$store.electionYear}
		required
	/>
	<BaseSelectMultiple
		id="politicalSubjects"
		label="Political subjects (multiple, at least one required)"
		options={czechPoliticalSubjects}
		required
		placeholder="Add subjects to selection by searching official name or abbreviation"
		bind:values={$store.politicalSubjectIds}
	/>
	{#if $store.politicalSubjectIds.length > 1 || $store.coalitionName}
		<BaseInput
			id="coalition"
			label="Because you selected more than one political subject, you can type in the name of the coalition"
			type="text"
			bind:value={$store.coalitionName}
		/>
	{/if}
	<BaseSelect
		id="typeOfPoliticalItem"
		label="Type of the material"
		options={[
			{ id: 'mass-printed', name: 'Mass-printed material' },
			{ id: 'spot', name: 'Spot' },
			{ id: 'other', name: 'Other' }
		]}
		required
		placeholder="Select the type of the material"
		bind:value={$store.typeOfPoliticalItem}
	/>
	{#if !$store.typeOfPoliticalItem}
		<p>More fields could appear once you select the type of the material</p>
	{:else}
		{#if $store.typeOfPoliticalItem === 'mass-printed'}{/if}
		{#if $store.typeOfPoliticalItem === 'spot'}{/if}
		<BaseInput
			id="additionalInfo"
			label="Additional information"
			type="text"
			bind:value={$store.additionalInformation}
		/>
	{/if}
	<SubmitHolder {errors} />
</form>

<style>
	form {
		display: grid;
		gap: 1rem;
	}
</style>
