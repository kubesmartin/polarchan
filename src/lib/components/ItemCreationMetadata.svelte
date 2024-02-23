<script lang="ts">
	import { politicalSubjects } from '$lib/consts/politicalSubjects';
	import BaseSelectMultiple from './BaseSelectMultiple.svelte';
	import SubmitButton from './SubmitButton.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const submit = () => {
		dispatch('validSubmit');
	};
</script>

<form on:submit|preventDefault={submit}>
	<BaseSelectMultiple
		id="politicalSubjects"
		label="Political subjects (multiple, at least one required)"
		options={politicalSubjects}
		required
		placeholder="Search for Czech political subjects by its official name (2024/2/1)"
	/>
	<div class="submit-holder">
		<div class="error-holder"></div>
		<div class="submit-holder__button">
			<SubmitButton>Next step</SubmitButton>
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
