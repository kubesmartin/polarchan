<script lang="ts">
	import { getFilterUrl } from '$lib/services/filterGetParamService';
	import type { PoliticalItemFilterSaved } from '$lib/types/PoliticalItem/PoliticalItemFilter';
	import ButtonBase from './ButtonBase.svelte';
	import ButtonLink from './ButtonLink.svelte';
	import ItemFilterFormBody from './ItemFilterFormBody.svelte';
	import { base } from '$app/paths';
	import { doc, deleteDoc, setDoc } from 'firebase/firestore';
	import { db } from '$lib/firebase';
	import { createEventDispatcher } from 'svelte';

	export let filter: PoliticalItemFilterSaved;
	export let userId: string;

	let backupFilter = JSON.parse(JSON.stringify(filter));
	let disabled = true;

	$: searchParams = getFilterUrl(filter);
	$: linkToBrowse = `${base}/items?${searchParams}`;

	const startEditation = () => {
		backupFilter = JSON.parse(JSON.stringify(filter));
		disabled = false;
	};

	const save = () => {
		disabled = true;
		updateQuery();
		dispatch('save', filter);
		backupFilter = JSON.parse(JSON.stringify(filter));
	};

	const cancelSave = () => {
		disabled = true;
		filter = backupFilter;
	};

	const dispatch = createEventDispatcher();

	const deleteQuery = async () => {
		const docRef = doc(db, `users/${userId}/queries`, filter.id);
		await deleteDoc(docRef);
		dispatch('delete', filter.id);
	};

	const updateQuery = async () => {
		const docRef = doc(db, `users/${userId}/queries`, filter.id);
		await setDoc(docRef, filter);
	};
</script>

<form>
	<h2>{filter.id}</h2>
	{#key filter}
		<ItemFilterFormBody {filter} {disabled} />
	{/key}
	<div class="controls">
		{#if disabled}
			<ButtonBase on:click={startEditation}>Edit query</ButtonBase>
			<ButtonLink href={linkToBrowse} target="_blank">Browse</ButtonLink>
			<ButtonBase on:click={deleteQuery}>Delete</ButtonBase>
		{:else}
			<ButtonBase on:click={save}>Confirm</ButtonBase>
			<ButtonBase on:click={cancelSave}>Cancel</ButtonBase>
		{/if}
	</div>
</form>

<style>
	form {
		border-top: 3px solid var(--c-brand);
		margin-bottom: 4rem;
	}
	.controls {
		margin-top: 1rem;
	}
</style>
