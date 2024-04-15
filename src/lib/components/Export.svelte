<script lang="ts">
	import { getPoliticalItemsByFilter } from '$lib/models/politicalItemModel';
	import type { PoliticalItemFilter } from '$lib/types/PoliticalItem/PoliticalItemFilter';
	import BaseInput from './BaseInput.svelte';
	import ButtonBase from './ButtonBase.svelte';
	import { fieldsInMeta } from '$lib/config/meta';
	import Loader from './Loader.svelte';

	export let filter: PoliticalItemFilter;

	let fileName = 'export';
	let loading = false;
	let error = '';

	// all possible CSV headers (from ids of metadata fields fieldsInMeta, its an array of objects)
	const headers = [...fieldsInMeta.map((field) => field.id), 'added', 'files'];

	// keys that need conversion to more meaningful values (selects) based on options
	const selectKeys = fieldsInMeta
		.filter((field) => field.type === 'select' || field.type === 'select-multiple')
		.map((field) => field.id);

	async function fetchItems() {
		try {
			const query = await getPoliticalItemsByFilter(filter, null);
			// convert query items to CSV
			const csvRows: string[] = [headers.join(',')];
			query.items.forEach((item) => {
				const row = headers.map((header) => {
					const value = item[header];
					if (selectKeys.includes(header)) {
						const field = fieldsInMeta.find((field) => field.id === header);
						if (field) {
							if (field.type === 'select') {
								return field.options.find((option) => option.id === value)?.name || value;
							} else if (field.type === 'select-multiple' && Array.isArray(value)) {
								return value
									.map((val) => field.options.find((option) => option.id === val)?.name || val)
									.join('; ');
							}
						}
					}
					// if array, join with '; '
					if (Array.isArray(value)) {
						return value.join('; ');
					}
					// if value contains comma, remove it
					if (typeof value === 'string' && value.includes(',')) {
						return value.replace(/,/g, '');
					}
					return value;
				});
				csvRows.push(row.join(','));
			});
			const csv = csvRows.join('\n');
			// prevent faulty utf-8 characters in MS Excel
			const blob = new Blob([new Uint8Array([0xef, 0xbb, 0xbf]), csv], { type: 'text/csv' });
			//const blob = new Blob([csv], { type: 'text/csv' });
			const url = URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = url;
			a.download = `${fileName}.csv`;
			a.click();
			loading = false;
		} catch (error) {
			console.error(error);
			if (error instanceof Error) {
				error = error.message;
			} else {
				error = 'An unknown error occurred';
			}
		}
	}
</script>

{#if !filter}
	<p>Filter is not defined to start export. Go back to queires or browsing items.</p>
{:else}
	<p>Exporting items with the following filter:</p>
	<pre>{JSON.stringify(filter, null, 2)}</pre>
	<p>
		Please understand that export can be a time-consuming and costly process for the server. Export
		will be available for download once it is ready after your request and should start
		automatically. Files are exported to utf-8 CSV format delimited by comma ("; is reserved for
		multiple choice values).
	</p>
	<form on:submit|preventDefault={fetchItems}>
		<BaseInput label="File name" bind:value={fileName} required={true} id="fileName" />
		<br />
		{#if error}
			<p>{error}. Do you want to try again?</p>
		{/if}
		{#if loading}
			<Loader />
		{:else}
			<ButtonBase type="button" on:click={window.history.back}>Go back</ButtonBase>
			<ButtonBase type="submit">I understand, export</ButtonBase>
		{/if}
	</form>
{/if}

<style>
	form {
		max-width: 400px;
	}
	p {
		max-width: 720px;
	}
	pre {
		background: var(--c-accent-black);
		padding: 1rem;
		max-width: 400px;
		box-sizing: border-box;
	}
</style>
