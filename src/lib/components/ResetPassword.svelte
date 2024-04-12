<script lang="ts">
	import ButtonBase from './ButtonBase.svelte';
	import BaseInput from './BaseInput.svelte';
	import { sendPasswordResetEmail } from 'firebase/auth';
	import { auth } from '$lib/firebase';
	import ErrorMessage from './ErrorMessage.svelte';
	import PolarchanLogo from './PolarchanLogo.svelte';

	let email = '';
	let error = '';
	let isErrored = false;
	let isReset = false;

	const resetPassword = async () => {
		try {
			await sendPasswordResetEmail(auth, email);
			isReset = true;
		} catch (e) {
			if (e instanceof Error) {
				error = e.message;
			} else {
				error = 'An unknown error occurred';
			}
			isErrored = true;
		}
	};
</script>

<form on:submit|preventDefault={resetPassword}>
	<PolarchanLogo />
	<p>
		{#if isReset}
			An email has been sent to {email} with instructions on how to reset your password.
		{:else}
			Enter your email address and we'll send you a link to reset your password.
		{/if}
	</p>
	<div class="input-holder">
		<BaseInput
			id="email__reset"
			label="Email"
			type="email"
			bind:value={email}
			required
			disabled={isReset}
			bind:isErrored
		/>
	</div>
	<div class="text-holder">
		{#if error}
			<ErrorMessage message={error} />
		{/if}
		<p>
			<a href="/signup">Don't have an account yet?</a>
		</p>
		<p>
			<a href="/login">Go to login</a>
		</p>
		<p>
			<a href="/">Back to homepage</a>
		</p>
	</div>

	<ButtonBase isDisabled={isReset}>Reset Password</ButtonBase>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		padding: 3rem;
		justify-content: center;
		align-items: center;
		max-width: 380px;
		width: 100%;
		box-sizing: border-box;
		background: var(--c-white);
	}

	.input-holder {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		width: 100%;
	}

	.text-holder {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		margin-bottom: 0.75rem;
		width: 100%;
	}

	p {
		margin: 0;
		font-size: 0.875rem;
	}

	a {
		color: var(--c-black);
		&&:hover {
			opacity: 0.8;
		}
	}
</style>
