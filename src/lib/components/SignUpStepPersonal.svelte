<script lang="ts">
	import BaseInput from './BaseInput.svelte';
	import type { Writable } from 'svelte/store';
	import type { SignUpPersonalInfoFormType } from '$lib/stores/personalInfoStore';
	import { createEventDispatcher } from 'svelte';
	import SubmitHolder from './SubmitHolder.svelte';

	export let store: Writable<SignUpPersonalInfoFormType>;

	let passwordMatchError: boolean;
	let passwordTooShortError: boolean;

	const dispatch = createEventDispatcher();

	const submit = () => {
		if (!$store.password) return;

		if ($store.password !== $store.passwordConfirm) {
			passwordMatchError = true;
			return;
		}
		passwordMatchError = false;

		if ($store.password.length < 6) {
			passwordTooShortError = true;
			return;
		}
		passwordTooShortError = false;

		dispatch('validSubmit');
	};
</script>

<form on:submit|preventDefault={submit}>
	<div class="two-col">
		<BaseInput
			id="titleBefore"
			label="Title(s) before name"
			type="text"
			bind:value={$store.titlesBefore}
		/>
		<BaseInput
			id="titleAfter"
			label="Title(s) after name"
			type="text"
			bind:value={$store.titlesAfter}
		/>
		<BaseInput
			id="firstName"
			label="First name"
			type="text"
			bind:value={$store.firstName}
			required
		/>
		<BaseInput id="lastName" label="Last name" type="text" bind:value={$store.lastName} required />
	</div>
	<BaseInput id="email" label="Email" type="email" bind:value={$store.email} required />
	<BaseInput id="password" label="Password" type="password" bind:value={$store.password} required />
	<BaseInput
		id="passwordConfirm"
		label="Confirm password"
		type="password"
		bind:value={$store.passwordConfirm}
		required
	/>
	<SubmitHolder
		errors={[
			passwordMatchError ? 'Passwords do not match' : '',
			passwordTooShortError ? 'Password must be at least 6 characters long' : ''
		]}
	/>
</form>

<style>
	.two-col {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
	form {
		display: grid;
		gap: 1rem;
	}
</style>
