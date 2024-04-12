<script lang="ts">
	import BaseInput from './BaseInput.svelte';
	import BaseSelectMultiple from './BaseAutocomplete.svelte';
	import { createEventDispatcher } from 'svelte';
	import SubmitHolder from './SubmitHolder.svelte';
	import BaseSelect from './BaseSelect.svelte';
	import NumericalInput from './NumericalInput.svelte';
	import { fieldsInMeta, type Fields } from '$lib/config/meta';
	import type { Writable } from 'svelte/store';

	const dispatch = createEventDispatcher();

	export let store: Writable<Fields>;
	let fields: Fields = $store.length > 0 ? $store : fieldsInMeta;

	let errors: string[] = [];

	const submit = () => {
		// check if all fields with .required are filled
		const requiredFieldsFilled = fields.every((field) => {
			if (field.required) {
				if (field.type === 'select-multiple') {
					return field.value.length > 0;
				}
				return field.value !== '';
			}
			return true;
		});

		if (!requiredFieldsFilled) {
			errors = ['Please fill in all required fields'];
			return;
		}
		errors = [];
		store.set(fields);
		dispatch('validSubmit');
	};
</script>

<form on:submit|preventDefault={submit}>
	{#each fields as field (field.id)}
		{#if !field.case || field.case(fields)}
			{#if field.type === 'number'}
				<NumericalInput
					id={field.id}
					label={field.label}
					bind:value={field.value}
					required={field.required}
				/>
			{:else if field.type === 'text'}
				<BaseInput
					id={field.id}
					label={field.label}
					type="text"
					bind:value={field.value}
					required={field.required}
				/>
			{:else if field.type === 'select'}
				<BaseSelect
					id={field.id}
					label={field.label}
					bind:value={field.value}
					options={field.options}
					required={field.required}
				/>
			{:else if field.type === 'select-multiple'}
				<BaseSelectMultiple
					id={field.id}
					label={field.label}
					bind:values={field.value}
					options={field.options}
					required={field.required}
				/>
			{/if}
		{/if}
	{/each}
	<SubmitHolder {errors} />
</form>

<style>
	form {
		display: grid;
		gap: 1rem;
	}
</style>
