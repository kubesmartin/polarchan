<script lang="ts">
	export let src: string;
</script>

<iframe {src} title="video" width="100%" height="100%"></iframe>

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
