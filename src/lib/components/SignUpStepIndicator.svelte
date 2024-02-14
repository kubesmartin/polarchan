<script lang="ts">
	export let step: number;
	export let content: string;
	export let status: `active` | `done` | `pending` = `pending`;
</script>

<div
	class="container"
	class:active={status === `active`}
	class:done={status === `done`}
	class:pending={status === `pending`}
	on:click
>
	<div class="number">
		{step}
	</div>
	<div class="content">
		{content}
	</div>
</div>

<style>
	:root {
		--height: 4rem;
	}
	.container {
		display: grid;
		height: var(--height);
		grid-template-columns: var(--height) 1fr;
		gap: 0;
		align-items: center;
	}
	.number {
		height: var(--height);
		width: var(--height);
		color: var(--c-white);
		display: inline-flex;
		justify-content: center;
		align-items: center;
		font-weight: 800;
		font-size: 1.3rem;
		font-family: var(--font-highlight);
	}

	.content {
		padding-inline: 1rem;
		color: var(--c-black);
		font-size: 1rem;
		height: var(--height);
		display: inline-flex;
		align-items: center;
	}

	p {
		margin: 0;
	}

	.done {
		cursor: pointer;
	}

	.active .content {
		background: var(--c-accent-brand);
	}
	.done .content {
		background: var(--c-accent-success);
	}
	.pending .content {
		background: var(--c-accent-black);
	}

	.active .number {
		background: var(--c-brand);
	}
	.done .number {
		background: var(--c-success);
	}
	.pending .number {
		background: var(--c-black);
	}
</style>
