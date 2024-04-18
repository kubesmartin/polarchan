<script lang="ts">
	export let src: string | undefined;
	export let alt: string | undefined;
	export let maxWidth = '200px';
	let imageExists: true | false | null = true;
</script>

<div style="max-width: {maxWidth}">
	{#if src && imageExists}
		<img {src} {alt} on:error={() => (imageExists = false)} />
	{:else}
		<div class="placeholder">Preview not available</div>
	{/if}
</div>

<style>
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		background: var(--c-light);
		position: relative;
		width: 100%;
	}
	div::before {
		content: '';
		display: block;
		padding-top: 100%;
	}
	.placeholder {
		position: absolute;
		color: var(--c-black);
		background: var(--c-accent-black);
		font-size: 0.85rem;
	}
</style>
