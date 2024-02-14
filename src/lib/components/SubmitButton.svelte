<button type="submit">
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
		&:hover {
			color: var(--c-accent-brand);
			border-color: var(--c-accent-brand);
		}
	}
</style>
