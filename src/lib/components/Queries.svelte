<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import type { IAuthService } from '$lib/interfaces/IAuthService';
	import type { IQueryService } from '$lib/interfaces/IQueryService';
	import QueriesSingle from './QueriesSingle.svelte';
	import { get } from 'svelte/store';
	import type { PoliticalItemFilterSaved } from '$lib/types/PoliticalItem/PoliticalItemFilter';
	import Loader from './Loader.svelte';

	const auth = getContext<IAuthService>('auth');
	const queryService = getContext<IQueryService>('queries');
	const queries: Writable<PoliticalItemFilterSaved[] | null> = writable(null);

	$: authStore = get(auth.store);

	onMount(async () => {
		if (authStore) {
			const fetchedQueries = await queryService.get({ table: 'queries', userId: authStore.uid });
			queries.set(fetchedQueries);
		}
	});

	function handleDelete(event: CustomEvent<string>) {
		queries.update((current) => (current ? current.filter((q) => q.id !== event.detail) : []));
	}
</script>

{#if authStore}
	{#if $queries !== null}
		{#if $queries.length > 0}
			{#each $queries as filter (filter.id)}
				<QueriesSingle {filter} userId={authStore.uid} on:delete={handleDelete} />
			{/each}
		{:else}
			<p>No queries found.</p>
		{/if}
	{:else}
		<Loader />
	{/if}
{:else}
	<p>You need to be logged in to see your queries.</p>
{/if}
