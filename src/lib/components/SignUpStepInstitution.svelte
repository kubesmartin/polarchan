<script lang="ts">
	import type { SignUpInstituionInfoFormType } from '$lib/stores/personalInfoStore';
	import type { Writable } from 'svelte/store';
	import BaseInput from './BaseInput.svelte';
	import ButtonBase from './ButtonBase.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let store: Writable<SignUpInstituionInfoFormType>;

	const submit = () => {
		dispatch('validSubmit');
	};
</script>

<form on:submit|preventDefault={submit}>
	<BaseInput
		id="institutionName"
		label="Institution name"
		type="text"
		bind:value={$store.institutionName}
		required
	/>
	<BaseInput
		id="primaryDepartment"
		label="Primary department"
		type="text"
		bind:value={$store.primaryDepartment}
		required
	/>
	<BaseInput id="status" label="Status" type="text" bind:value={$store.status} required />
	<div class="submit-holder">
		<div class="error-holder"></div>
		<div class="submit-holder__button">
			<ButtonBase>Next step</ButtonBase>
		</div>
	</div>
</form>

<style>
	.submit-holder {
		display: flex;
		justify-content: space-between;
	}
	.error-holder {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.submit-holder__button {
		margin-left: auto;
	}
	form {
		display: grid;
		gap: 1rem;
	}
</style>
