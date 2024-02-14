<button type="submit">
	<slot />
</button>

<style>
	button {
		color: var(--c-brand);
		display: inline-block;
		border: 1px solid var(--c-brand);
		text-decoration: none;
		font-size: 1.2rem;
		padding: 0.5rem 1rem;
		&:hover {
			color: var(--c-accent-brand);
			border-color: var(--c-accent-brand);
		}
	}
</style>
