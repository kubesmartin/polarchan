<script lang="ts">
	import { politicalSubjects } from '$lib/consts/politicalSubjects';
	import type { Writable } from 'svelte/store';
	import BaseInput from './BaseInput.svelte';
	import BaseSelectMultiple from './BaseAutocomplete.svelte';
	import { createEventDispatcher } from 'svelte';
	import type { PoliticalItemForm } from '$lib/stores/itemCreationStore';
	import SubmitHolder from './SubmitHolder.svelte';
	import BaseSelect from './BaseSelect.svelte';

	const dispatch = createEventDispatcher();

	export let store: Writable<PoliticalItemForm>;

	let errors: string[] = [];

	const submit = () => {
		console.log($store);
		if (
			!$store.country ||
			!$store.typeOfElectionId ||
			!$store.politicalSubjectIds.length ||
			!$store.date
		) {
			errors = ['Please fill in all required fields'];
			return;
		}
		errors = [];
		dispatch('validSubmit');
	};
</script>

<form on:submit|preventDefault={submit}>
	<BaseInput id="country" label="Country" type="text" bind:value={$store.country} required />
	<BaseSelectMultiple
		id="electionYear"
		label="Campaign type and year (single select)"
		options={[
			{ id: '2', name: 'Communal election 2022' },
			{ id: '3', name: 'Senate election 2022' },
			{ id: '4', name: 'Presidential election 2023' },
			{ id: '5', name: 'Chamber of Deputies election 2024' }
		]}
		required
		placeholder="Search for the country's election campaign type and year"
		bind:values={$store.typeOfElectionId}
	/>
	<BaseSelectMultiple
		id="politicalSubjects"
		label="Political subjects (multiple, at least one required)"
		options={politicalSubjects}
		required
		placeholder="Search for Czech political subjects by its official name (2024/2/1)"
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
	<BaseInput
		id="date"
		label="Date when the material was (i) published or (ii) broadcasted or (iii) seen"
		type="date"
		bind:value={$store.date}
		required
	/>
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
