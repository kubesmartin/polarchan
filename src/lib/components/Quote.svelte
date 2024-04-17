<quote>
	<slot />
</quote>

<style>
	quote {
		display: block;
		margin: 0;
		padding: 1.8rem;
		padding-right: 0;
		padding-bottom: 0;
		border: none;
		position: relative;
		border-bottom: 0;
		background-color: none;
		width: 100%;
		box-sizing: border-box;
		font-size: 1.2rem;
	}
	quote::before {
		content: '”';
		position: absolute;
		top: -1.5rem;
		left: -0.5rem;
		font-size: 10rem;
		line-height: 1;
		color: var(--c-brand);
		opacity: 0.1;
		font-family: var(--font-highlight);
	}
	@media (max-width: 600px) {
		quote {
			font-size: 1rem;
		}
	}
	@media (max-width: 400px) {
		quote::before {
			display: none;
		}
		quote {
			padding: 0;
		}
	}
</style>
