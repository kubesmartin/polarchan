<script lang="ts">
	import type { PoliticalItemFilter } from '$lib/types/PoliticalItem/PoliticalItemFilter';
	import { goto } from '$app/navigation';
	import { getFilterUrl } from '$lib/services/filterGetParamService';
	import { politicalItemTypes } from '$lib/consts/politicalItemTypes';
	import ButtonBase from './ButtonBase.svelte';
	import ItemFilterFormBody from './ItemFilterFormBody.svelte';

	export let filter: PoliticalItemFilter;

	const submit = () => {
		console.log(filter);
		const parameters = getFilterUrl(filter);
		goto(`/items?${parameters}`);
	};
</script>

<form on:submit|preventDefault={submit}>
	<h2>Query Parameters</h2>
	<ItemFilterFormBody {filter} />
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
	h2 {
		margin: 0;
		color: var(--c-brand);
	}
</style>
