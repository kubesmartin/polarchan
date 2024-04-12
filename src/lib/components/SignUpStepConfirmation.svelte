<script lang="ts">
	import type { Writable } from 'svelte/store';
	import type { SignUpPersonalInfoFormType } from '$lib/stores/personalInfoStore';
	import type { SignUpInstituionInfoFormType } from '$lib/stores/personalInfoStore';
	import type { IAuthService } from '$lib/interfaces/IAuthService';
	import Button from './ButtonLink.svelte';
	import ButtonBase from './ButtonBase.svelte';
	import { getContext } from 'svelte';
	import type { IUserMetaInfo } from '$lib/interfaces/IUserMetaInfo';

	export let personalStore: Writable<SignUpPersonalInfoFormType>;
	export let institutionStore: Writable<SignUpInstituionInfoFormType>;

	const auth: IAuthService = getContext('auth');

	let isAllConfirmed = false;

	const confirmRegister = () => {
		isAllConfirmed = true;
	};

	const register = async () => {
		const { email, password, firstName, lastName } = $personalStore;
		const { institutionName, primaryDepartment, status } = $institutionStore;
		const { titlesAfter, titlesBefore } = $personalStore;

		if (
			!password ||
			!email ||
			!firstName ||
			!lastName ||
			!institutionName ||
			!primaryDepartment ||
			!status
		)
			throw new Error('Some mandatory fields are empty');

		const metadata: IUserMetaInfo = {
			titlesAfter,
			titlesBefore,
			institutionName,
			primaryDepartment,
			status,
			firstName,
			lastName
		};

		await auth.register(email, password, metadata);
	};
</script>

{#if isAllConfirmed}
	{#await register()}
		<h2>Registering user</h2>
		<p>Please wait while we register your account.</p>
	{:then}
		<h2>Registration successful,<br />welcome to PolARCHAN!</h2>
		<p>
			An email with a registration confirmation address has been sent to your email address. If you
			can't find anything in your main mail, try checking your SPAM folder. After confirming your
			email adress, you can login and start using PolARCHAN!
		</p>
		<Button href="/login">Login</Button>
	{:catch error}
		<h2>Registration failed</h2>
		{#if error.message === 'Some mandatory fields are empty'}
			<p>Some mandatory fields are empty. Return back.</p>
		{:else if error.message === 'Firebase: Error (auth/email-already-in-use).'}
			<p>Email already in use. Login instead. If you forgot your password, you can reset it.</p>
			<Button href="/login">Login</Button>
		{:else}
			<p>Error occured while registering user.</p>
			<p>Error message: {error.message}</p>
		{/if}
	{/await}
{:else}
	<h2>Confirm your registration</h2>
	<form on:submit|preventDefault={confirmRegister}>
		<p>
			Please confirm that all the information you provided is correct and that you agree to our:
		</p>
		<ul>
			<li><a href="/terms">Terms of service</a></li>
			<li><a href="/privacy">Privacy policy</a></li>
		</ul>
		<ButtonBase on:click={() => (isAllConfirmed = true)}>I agree, register me</ButtonBase>
	</form>
{/if}

<style>
	h2 {
		font-size: 2rem;
		color: var(--c-brand);
		margin: 0;
	}
	ul {
		padding-inline: 1rem;
		margin-bottom: 2rem;
	}
	a {
		color: var(--c-brand);
		&&:hover {
			opacity: 0.8;
		}
	}
</style>
