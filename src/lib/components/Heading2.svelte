<script lang="ts">
	export let text: string;
</script>

<h2>{text}</h2>

<style>
	h2 {
		color: var(--c-black);
		font-size: 2rem;
		margin-top: 0;
		margin-bottom: 2rem;
	}
	@media (max-width: 1200px) {
		h2 {
			font-size: 1.75rem;
		}
	}
	@media (max-width: 800px) {
		h2 {
			font-size: 1.55rem;
		}
	}
	@media (max-width: 600px) {
		h2 {
			font-size: 1.35rem;
		}
	}
	@media (max-width: 400px) {
		h2 {
			font-size: 1.15rem;
		}
	}
</style>
