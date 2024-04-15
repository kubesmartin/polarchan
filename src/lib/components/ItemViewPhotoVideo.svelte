<script lang="ts">
	import ThumbnailImage from './ThumbnailImage.svelte';

	export let src: string;

	const convertSrc = (src: string) => {
		const parameteresOfThumbnailInGet = src.split('?')[1];
		return src.replace(/\.[^/.]+$/, '.jpeg') + '?' + parameteresOfThumbnailInGet;
	};
	// convert that src to a thumbnail
	const thumbnailSrc = convertSrc(src);
</script>

<div>
	<ThumbnailImage src={thumbnailSrc} alt="thumbnail" />
	<p>Material is not an image. View it <a href={src} target="_blank">here</a>.</p>
</div>

<style>
	p {
		margin: 0;
	}
	div {
		background: var(--c-accent-black);
		display: flex;
		flex-direction: column;
		gap: 1rem;
		justify-content: center;
		align-items: center;
		height: 300px;
		width: 100%;
		box-sizing: border-box;
	}
</style>
