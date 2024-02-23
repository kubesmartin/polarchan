<script lang="ts">
	import ErrorMessage from './ErrorMessage.svelte';
	import SubmitButton from './SubmitButton.svelte';
	export let errors: string[] = [];
</script>

<div class="submit-holder">
	<div class="error-holder">
		{#each errors as error}
			<ErrorMessage message={error} />
		{/each}
	</div>
	<div class="submit-holder__button">
		<SubmitButton>Next step</SubmitButton>
	</div>
</div>

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
</style>
