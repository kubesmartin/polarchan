<script lang="ts">
	import ButtonBase from './ButtonBase.svelte';
	import ButtonLink from './ButtonLink.svelte';
	import ItemViewPhotoVideo from './ItemViewPhotoVideo.svelte';

	export let files: Array<{ src: string; isImage: boolean; type: string }>;
	export let hideTitle: boolean = false;
	let current = 0;
</script>

<div class="main">
	{#if !hideTitle}
		<h2>File {current + 1} of {files.length}</h2>
	{/if}
	{#if files.length > 0}
		{#if files[current].isImage}
			<img src={files[current].src} alt="item image" />
		{:else}
			<ItemViewPhotoVideo src={files[current].src} type={files[current].type} />
		{/if}
		<div class="controls">
			{#if files.length > 1}
				<ButtonBase on:click={() => (current = (current - 1 + files.length) % files.length)}
					>Previous</ButtonBase
				>
				<ButtonBase on:click={() => (current = (current + 1) % files.length)}>Next</ButtonBase>
			{/if}
			<ButtonLink href={files[current].src} target="_blank">Open in new tab</ButtonLink>
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
