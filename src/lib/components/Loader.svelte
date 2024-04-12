<div class="wrap">
	<div class="loader"></div>
	<p>Loading...</p>
</div>

<style>
	.wrap {
		display: flex;
		justify-content: left;
		align-items: center;
		box-sizing: border-box;
		width: 100%;
		padding: 15px;
		gap: 20px;
		padding-inline: 0;
	}
	.loader {
		width: 30px;
		aspect-ratio: 1;
		border-radius: 50%;
		border: 8px solid;
		border-color: var(--c-brand) transparent var(--c-brand) transparent;
		animation: l1 1s infinite;
	}
	@keyframes l1 {
		to {
			transform: rotate(0.5turn);
		}
	}
</style>
