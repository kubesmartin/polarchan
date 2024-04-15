<script lang="ts">
	import type { PoliticalItemFilter } from '$lib/types/PoliticalItem/PoliticalItemFilter';
	import { goto } from '$app/navigation';
	import { getFilterUrl } from '$lib/services/filterGetParamService';
	import ButtonBase from './ButtonBase.svelte';
	import ItemFilterFormBody from './ItemFilterFormBody.svelte';
	import type { IAuthService } from '$lib/interfaces/IAuthService';
	import { getContext } from 'svelte';
	import { collection, addDoc } from 'firebase/firestore';
	import { db } from '$lib/firebase';
	import { get } from 'svelte/store';

	export let filter: PoliticalItemFilter;

	const auth: IAuthService = getContext<IAuthService>('auth');

	const submit = () => {
		console.log(filter);
		const parameters = getFilterUrl(filter);
		goto(`/items?${parameters}`);
	};

	const saveQuery = async () => {
		// use firestore, collection 'queries' subcollection 'user.uid'
		// store the filter object
		const user = get(auth.store);
		if (!user) return;
		await addDoc(collection(db, `users/${user.uid}/queries`), {
			...filter
		});
		alert('Query saved. You can now analyze and export the data in the "Queries" section.');
	};
</script>

<form on:submit|preventDefault={submit}>
	<h2>Query Parameters</h2>
	<ItemFilterFormBody {filter} />
	<div>
		<ButtonBase type="submit">Filter</ButtonBase>
		<ButtonBase type="button" on:click={() => goto('/items')}>Clear</ButtonBase>
		<ButtonBase type="button" on:click={saveQuery}>Save for analysis & export</ButtonBase>
	</div>
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
