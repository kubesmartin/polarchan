<script lang="ts">
	import { politicalSubjects } from '$lib/consts/politicalSubjects';
	import BaseInput from './BaseInput.svelte';
	import BaseSelect from './BaseSelect.svelte';
	import BaseSelectMultiple from './BaseSelectMultiple.svelte';
	import SubmitButton from './SubmitButton.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const submit = () => {
		dispatch('validSubmit');
	};
</script>

<form on:submit|preventDefault={submit}>
	<BaseSelect
		id="electionYear"
		label="Election year"
		options={[
			{ id: '2', name: '2021' },
			{ id: '3', name: '2024' }
		]}
		required
	/>
	<BaseSelectMultiple
		id="politicalSubjects"
		label="Political subjects (multiple, at least one required)"
		options={politicalSubjects}
		required
		placeholder="Search for Czech political subjects by its official name (2024/2/1)"
	/>
	<BaseInput
		id="coalition"
		label="Because you selected more than one political subject, you can type in the name of the coalition"
		type="text"
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
