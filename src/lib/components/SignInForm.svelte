<script lang="ts">
	import { onMount } from 'svelte';
	import { signIn } from '../stores/auth';
	import { navigate } from 'svelte-routing';
	import SubmitButton from './SubmitButton.svelte';

	let email = '';
	let password = '';

	const handleSubmit = async (event: Event) => {
		event.preventDefault();
		await signIn(email, password);
		navigate('/');
	};

	onMount(() => {
		if (localStorage.getItem('token')) {
			navigate('/');
		}
	});
</script>

<form on:submit|preventDefault={login}>
	<label for="email">Email</label>
	<input type="email" id="email" bind:value={email} />
	<label for="password">Password</label>
	<input type="password" id="password" bind:value={password} />
	<SubmitButton />
</form>
