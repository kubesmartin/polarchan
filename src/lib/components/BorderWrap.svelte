<div class="wrap">
	<slot />
</div>

<style>
	.wrap {
		color: var(--c-black);
		margin: 0;
		padding: 0;
		border: 1.2rem solid var(--c-brand);
		border-bottom: 0;
		background-color: var(--c-white);
		width: 100%;
		min-height: calc(100vh - 1.2rem);
		box-sizing: border-box;
	}
</style>
