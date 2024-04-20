<script lang="ts">
	export let isDisabled = false;
	export let type: 'button' | 'submit' = 'button';
</script>

<button {type} disabled={isDisabled} on:click>
	<slot />
</button>

<style>
	button {
		color: var(--c-brand);
		display: inline-block;
		width: fit-content;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		border: 1px solid var(--c-brand);
		text-decoration: none;
		font-size: 1.2rem;
		padding: 0.5rem 1rem;
		background: none;
		cursor: pointer;
		font-family: var(--font-body);
		&:hover {
			color: var(--c-accent-brand);
			background: var(--c-brand);
			border-color: var(--c-brand);
		}
		&:disabled {
			border-color: var(--c-accent-black);
			color: var(--c-accent-black);
			cursor: not-allowed;
		}
	}
	@media (max-width: 1200px) {
		button {
			font-size: 1.15rem;
		}
	}
	@media (max-width: 800px) {
		button {
			font-size: 1.1rem;
		}
	}
	@media (max-width: 600px) {
		button {
			font-size: 1rem;
		}
	}
</style>
