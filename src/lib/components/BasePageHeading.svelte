<script lang="ts">
	export let title: string;
</script>

<h1>{title}</h1>

<style>
	h1 {
		color: var(--c-brand);
		font-size: 2.5rem;
		margin-top: 0;
		margin-bottom: 2rem;
	}
	@media (max-width: 800px) {
		h1 {
			font-size: 2rem;
		}
	}
	@media (max-width: 600px) {
		h1 {
			font-size: 2rem;
		}
	}
	@media (max-width: 400px) {
		h1 {
			font-size: 1.5rem;
		}
	}
</style>
