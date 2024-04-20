<script lang="ts">
	import BaseInput from './BaseInput.svelte';
	import BaseSelectMultiple from './BaseAutocomplete.svelte';
	import { createEventDispatcher } from 'svelte';
	import SubmitHolder from './SubmitHolder.svelte';
	import BaseSelect from './BaseSelect.svelte';
	import NumericalInput from './NumericalInput.svelte';
	import { type Fields, fieldsInMeta } from '$lib/config/meta';
	import type { Writable } from 'svelte/store';
	import ItemViewPhoto from './ItemViewPhoto.svelte';
	import LayoutColumnsTwo from './LayoutColumnsTwo.svelte';
	import { deepCopy } from '$lib/utils/copy';

	const dispatch = createEventDispatcher();

	export let store: Writable<Fields>;
	export let files: Writable<File[]>;

	// Deep clone the fields to avoid modifying the original
	let metaFields: Fields = deepCopy(fieldsInMeta);

	let fields: Fields = $store.length > 0 ? $store : metaFields;
	console.log(fields, metaFields, $store);

	let errors: string[] = [];

	// Reactively check fields "case" function, if false,
	// automatically set the field value to empty string or []
	$: fields = fields.map((field) => {
		if (field.case && !field.case(fields)) {
			if (field.type === 'select-multiple') {
				field.value = [];
			} else {
				field.value = '';
			}
		}
		return field;
	});

	const submit = () => {
		// check if all fields with .required are filled
		// take in account the case function!
		const nonFilledFields = fields.filter((field) => {
			if (field.case && !field.case(fields)) {
				return false;
			}
			if (field.required) {
				if (field.type === 'select-multiple') {
					return field.value.length === 0;
				}
				return field.value === '';
			}
			return false;
		});

		if (nonFilledFields.length > 0) {
			errors = [
				'Please fill in all required fields:',
				...nonFilledFields.map((field) => field.label)
			];
			return;
		}
		errors = [];
		store.set(fields);
		dispatch('validSubmit');
	};

	const srcs: Array<{ src: string; isImage: boolean; type: string }> =
		$files.length > 0
			? $files.map((file) => {
					return {
						src: URL.createObjectURL(file),
						isImage: file.type.startsWith('image/'),
						type: file.type
					};
				})
			: [];
</script>

<LayoutColumnsTwo>
	<ItemViewPhoto files={srcs} slot="left" />
	<form on:submit|preventDefault={submit} slot="right">
		<h2>Metadata for the item</h2>
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
						placeholder={field.placeholder}
					/>
				{:else if field.type === 'select-multiple'}
					<BaseSelectMultiple
						id={field.id}
						label={field.label}
						bind:values={field.value}
						options={field.options}
						required={field.required}
						placeholder={field.placeholder}
					/>
				{/if}
			{/if}
		{/each}
		<SubmitHolder {errors} />
	</form>
</LayoutColumnsTwo>

<style>
	form {
		display: grid;
		gap: 1rem;
	}
	h2 {
		margin-bottom: 0;
	}
</style>
