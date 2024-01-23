<script lang="ts">
	export let href: string;
	export let label: string;
	export let isHighlighted: boolean = false;
</script>

<a {href} aria-label={label} class:highlighted={isHighlighted}>
	{label}
</a>

<style>
	a {
		color: var(--c-brand);
		display: inline-flex;
		align-items: center;
		text-decoration: none;
		font-size: 1rem;
		padding: 0.5rem 1rem;
		height: 35px;
		box-sizing: border-box;
		font-family: 'Archivo Black', sans-serif;
		&:hover {
			color: var(--c-accent-brand);
			border-color: var(--c-accent-brand);
		}
	}

	.highlighted {
		background-color: var(--c-brand);
		color: var(--c-white);
		margin-inline: 0.5rem;
		&:hover {
			background-color: var(--c-accent-brand);
			color: var(--c-white);
		}
	}

	.highlighted:last-child {
		margin-right: 0;
	}

	.highlighted:first-child {
		margin-left: 0;
	}
</style>
