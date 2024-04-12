<script lang="ts">
	import type { PoliticalItemForm } from '$lib/stores/itemCreationStore';
	import { saveItem } from '$lib/utils/saveItem';
	import type { Writable } from 'svelte/store';
	import SubmitButton from './SubmitButton.svelte';
	// import sveltekit redirect
	import { goto } from '$app/navigation';
	import { getContext } from 'svelte';
	import { get } from 'svelte/store';
	import type { IAuthService } from '$lib/interfaces/IAuthService';

	export let metaDataStore: Writable<PoliticalItemForm>;
	export let filesStore: Writable<File[]>;

	let isUploading: boolean = false;

	let errorMessages: string[] = [];

	const auth: IAuthService = getContext('auth');

	const submit = async () => {
		if (isUploading) return;
		isUploading = true;
		const metaData = $metaDataStore;
		const files = $filesStore;

		if (!metaData || !files) {
			errorMessages = ['Please fill in all required fields'];
			return;
		}

		try {
			const userStore = get(auth.store);
			if (!userStore) {
				throw new Error('You need to be logged in to upload an item');
			}
			const id = await saveItem(metaData, files, userStore.uid);
			goto(`/item?id=${id}&uploaded=true`);
		} catch (error) {
			if (error instanceof Error) {
				errorMessages = [error.message];
			} else {
				errorMessages = ['An unknown error occurred'];
			}
			isUploading = false;
		}
	};
</script>

<form on:submit|preventDefault={submit}>
	<p>
		You are about to create a new item. By uploading the files, you agree to the terms and
		conditions of the platform. You can make sure that the metadata is correct on the previous
		steps.
	</p>

	{#if errorMessages.length}
		<p>There was an error during the upload:</p>
		<ul>
			{#each errorMessages as error}
				<li>{error}</li>
			{/each}
		</ul>
		<p>Want to try again?</p>
	{/if}
	<br />
	{#if isUploading}
		<p>Uploading...</p>
	{:else}
		<SubmitButton>Confirm and upload</SubmitButton>
	{/if}
</form>

<style>
	p {
		max-width: 620px;
		margin: 0;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
