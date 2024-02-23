<script lang="ts">
	import { onMount } from 'svelte';
	export let label: string;
	export let value: string = '';
	export let id: string;
	export let placeholder: string = '';
	export let required: boolean = false;
	export let disabled: boolean = false;
	export let options: Array<{ id: string; name: string }> = [];
	export let isErrored: boolean = false;

	let filteredOptions = options;
	let searchText = '';

	// Update filtered options based on search text
	const updateFilteredOptions = () => {
		filteredOptions = options.filter(
			(option) =>
				option.name.toLowerCase().includes(searchText.toLowerCase()) && option.id !== value
		);
	};

	// Watch for changes in search text to update the filtered options
	$: searchText, updateFilteredOptions();

	// Handle selection
	const selectOption = (optionValue: string) => {
		value = optionValue;
		// Optionally, clear search text or keep the selected option's text
		searchText = options.find((option) => option.id === optionValue)?.name || '';
	};

	onMount(() => {
		// Initialize filtered options
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
	<select {id} bind:value multiple hidden {required} {disabled}>
		{#each options as option}
			<option value={option.id} selected={option.id === value}>{option.name}</option>
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
				<li on:click={() => selectOption(option.id)}>{option.name}</li>
			{/each}
		</ul>
	{/if}
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
