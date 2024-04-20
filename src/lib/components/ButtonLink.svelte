<script lang="ts">
	export let href: string;
	export let disabled = false;
	export let target: '_blank' | '_self' = '_self';
</script>

<a {href} {target} class:disabled>
	<slot />
</a>

<style>
	a {
		color: var(--c-brand);
		display: inline-block;
		border: 1px solid var(--c-brand);
		text-decoration: none;
		font-size: 1.2rem;
		padding: 0.5rem 1rem;
		font-family: var(--font-body);
		&:hover {
			color: var(--c-accent-brand);
			background: var(--c-brand);
			border-color: var(--c-brand);
		}
		&.disabled {
			border-color: var(--c-accent-black);
			color: var(--c-accent-black);
			cursor: not-allowed;
			pointer-events: none;
		}
	}
	@media (max-width: 1200px) {
		a {
			font-size: 1.15rem;
		}
	}
	@media (max-width: 800px) {
		a {
			font-size: 1.1rem;
		}
	}
	@media (max-width: 600px) {
		a {
			font-size: 1rem;
		}
	}
</style>
