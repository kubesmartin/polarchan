<script lang="ts">
	export let src: string | undefined;
	export let alt: string | undefined;
</script>

<div>
	{#if src}
		<img {src} {alt} />
	{/if}
</div>

<style>
	img,
	div {
		max-width: 100%;
		height: 200px;
		object-fit: cover;
		width: 200px;
	}
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		background: var(--c-light);
	}
</style>
