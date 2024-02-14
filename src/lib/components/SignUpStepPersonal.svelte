<script lang="ts">
	import type { SignUpPersonalInfoType } from '$lib/types/signUpStepTypes';
	import BaseInput from './BaseInput.svelte';
	import ErrorMessage from './ErrorMessage.svelte';
	import SubmitButton from './SubmitButton.svelte';

	export let personalData: SignUpPersonalInfoType | null;

	let passwordMatchError: boolean;
	let passwordTooShortError: boolean;

	let titlesBefore = '';
	let titlesAfter = '';
	let firstName = '';
	let lastName = '';
	let email = '';
	let password = '';
	let passwordConfirm = '';

	const submit = () => {
		if (password !== passwordConfirm) {
			passwordMatchError = true;
			return;
		}
		if (password.length < 6) {
			passwordTooShortError = true;
			return;
		}
		const personalInfo: SignUpPersonalInfoType = {
			titlesBefore,
			titlesAfter,
			firstName,
			lastName,
			email,
			password
		};
		personalData = personalInfo;
	};
</script>

<form on:submit|preventDefault={submit}>
	<div class="two-col">
		<BaseInput
			id="titleBefore"
			label="Title(s) before name"
			type="text"
			bind:value={titlesBefore}
		/>
		<BaseInput id="titleAfter" label="Title(s) after name" type="text" bind:value={titlesAfter} />
		<BaseInput id="firstName" label="First name" type="text" bind:value={firstName} required />
		<BaseInput id="lastName" label="Last name" type="text" bind:value={lastName} required />
	</div>
	<BaseInput id="email" label="Email" type="email" bind:value={email} required />
	<BaseInput id="password" label="Password" type="password" bind:value={password} required />
	<BaseInput
		id="passwordConfirm"
		label="Confirm password"
		type="password"
		bind:value={passwordConfirm}
		required
	/>
	<div class="submit-holder">
		<div class="error-holder">
			{#if passwordMatchError}
				<ErrorMessage message="Passwords do not match" />
			{/if}
			{#if passwordTooShortError}
				<ErrorMessage message="Password must be at least 6 characters long" />
			{/if}
		</div>
		<div class="submit-holder__button">
			<SubmitButton>Next step</SubmitButton>
		</div>
	</div>
</form>

<style>
	.two-col {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
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
