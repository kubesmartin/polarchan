<script lang="ts">
	import ButtonBase from './ButtonBase.svelte';
	import ButtonLink from './ButtonLink.svelte';
	import ItemViewPhotoVideo from './ItemViewPhotoVideo.svelte';

	export let srcs: string[] = [];
	let current = 0;

	const isImage = (src: string) => {
		// beware, there are searchParams in the URL
		const url = new URL(src);
		const extension = url.pathname.split('.').pop();
		if (
			extension === 'jpg' ||
			extension === 'jpeg' ||
			extension === 'png' ||
			extension === 'webp'
		) {
			return true;
		}
	};
</script>

<div class="main">
	<h2>Material {current + 1} of {srcs.length}</h2>
	{#if srcs.length > 0}
		{#if isImage(srcs[current])}
			<img src={srcs[current]} alt="item image" />
		{:else}
			<ItemViewPhotoVideo src={srcs[current]} />
		{/if}
		<div class="controls">
			{#if srcs.length > 1}
				<ButtonBase on:click={() => (current = (current - 1 + srcs.length) % srcs.length)}
					>Previous</ButtonBase
				>
				<ButtonBase on:click={() => (current = (current + 1) % srcs.length)}>Next</ButtonBase>
			{/if}
			<ButtonLink href={srcs[current]} target="_blank">Open in new tab</ButtonLink>
		</div>
	{:else}
		<p>No images found</p>
	{/if}
</div>

<style>
	.main {
		display: flex;
		flex-direction: column;
	}

	.controls {
		display: flex;
		gap: 0.5rem;
		width: 100%;
		margin-block: 1rem;
	}
	img {
		max-width: 100%;
		max-height: 100%;
	}
</style>
