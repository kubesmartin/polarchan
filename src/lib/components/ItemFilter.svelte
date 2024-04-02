<script lang="ts">
	import type { PoliticalItemFilter } from '$lib/types/PoliticalItem/PoliticalItemFilter';
	import { goto } from '$app/navigation';
	import { getFilterUrl } from '$lib/services/filterGetParamService';

	export let filter: PoliticalItemFilter;

	const submit = () => {
		console.log(filter);
		const parameters = getFilterUrl(filter);
		goto(`/items?${parameters}`);
	};
</script>

<form on:submit|preventDefault={submit}>
	<input type="text" bind:value={filter.type} placeholder="Type" />
	<input type="number" bind:value={filter.year.from} placeholder="Year from" />
	<input type="number" bind:value={filter.year.to} placeholder="Year to" />
	<input type="text" bind:value={filter.politicalParty} placeholder="Political party" />
	<input type="text" bind:value={filter.electionType} placeholder="Election type" />
	<button type="submit">Filter</button>
</form>
