<script lang="ts">
	import { onMount } from 'svelte';
	export let label: string;
	export let values: string[] = [];
	export let id: string;
	export let placeholder: string = '';
	export let required: boolean = false;
	export let disabled: boolean = false;
	export let options: Array<{ id: string; name: string }> = [];
	export let isErrored: boolean = false;

	let filteredOptions = options;
	let searchText = '';

	// Filter options excluding already selected values
	const updateFilteredOptions = () => {
		filteredOptions = options.filter(
			(option) =>
				option.name.toLowerCase().includes(searchText.toLowerCase()) && !values.includes(option.id)
		);
	};

	// Add or remove a value from the selection
	const toggleSelection = (optionValue: string) => {
		const index = values.indexOf(optionValue);
		if (index === -1) {
			values = [...values, optionValue];
		} else {
			values = values.filter((_, i) => i !== index);
		}
		searchText = '';
		updateFilteredOptions();
	};

	// Remove a chip
	const removeChip = (chipValue: string) => {
		values = values.filter((value) => value !== chipValue);
		updateFilteredOptions();
	};

	onMount(() => {
		updateFilteredOptions();
	});
</script>

<label for={id} class:isErrored>
	<span class="label">
		<span>{label}</span>
		{#if required}
			<span> *</span>
		{/if}
	</span>
	<!-- add hidden selectbox -->
	<select {id} bind:value={values} multiple hidden>
		{#each values as value}
			<option {value} selected />
		{/each}
	</select>
	<input
		type="text"
		{id}
		bind:value={searchText}
		on:input={updateFilteredOptions}
		{placeholder}
		{disabled}
		class="autocomplete-input"
	/>
	{#if searchText}
		<ul class="options-list">
			{#each filteredOptions as option}
				<li on:click={() => toggleSelection(option.id)}>{option.name}</li>
			{/each}
		</ul>
	{/if}
	<div class="chips-container">
		{#each values as value}
			<span class="chip">
				{options.find((option) => option.id === value)?.name || ''}
				<button type="button" on:click={() => removeChip(value)}>×</button>
			</span>
		{/each}
	</div>
</label>

<style>
	label {
		display: block;
		position: relative;
		color: var(--c-black);
	}
	.label {
		padding-inline: 0.5rem;
		font-size: 0.8rem;
	}
	.chips-container {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem;
		margin-top: 0.25rem;
	}
	.chip {
		display: inline-flex;
		align-items: center;
		padding: 0.25rem 0.5rem;
		background-color: var(--c-light);
		font-size: 0.8rem;
		background: var(--c-brand);
		color: var(--c-white);
		padding-right: 0;
	}
	.chip button {
		margin-left: 0.3rem;
		color: var(--c-white);
		border: none;
		background: transparent;
		cursor: pointer;
	}
	.autocomplete-input {
		display: block;
		width: 100%;
		padding: 0.5rem;
		font-size: 1rem;
		border: 1px solid var(--c-black);
		background: var(--c-white);
		color: var(--c-black);
		box-sizing: border-box;
	}
	.options-list {
		position: absolute;
		z-index: 100;
		width: 100%;
		background: var(--c-white);
		border: 1px solid var(--c-black);
		list-style: none;
		margin: 0;
		padding: 0;
		max-height: 200px;
		overflow-y: auto;
	}
	.options-list li {
		padding: 0.5rem;
		cursor: pointer;
	}
	.options-list li:hover {
		background-color: var(--c-light);
	}
	.isErrored {
		color: var(--c-error);
	}
	.isErrored .autocomplete-input,
	.isErrored .options-list {
		border-color: var(--c-error);
	}
</style>
