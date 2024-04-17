<script lang="ts">
	export let src: string | undefined;
	export let alt: string | undefined;
	export let maxWidth = '200px';
</script>

<div>
	{#if src}
		<img {src} {alt} style="max-width: {maxWidth}" />
	{/if}
</div>

<style>
	img,
	div {
		height: auto;
		object-fit: cover;
		width: 100%;
	}
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		background: var(--c-light);
	}
</style>
