<script lang="ts">
	export let title: string;
</script>

<div class="outer-holder">
	<h2>{title}</h2>
	<div class="content-container">
		<slot />
	</div>
</div>

<style>
	.outer-holder {
		background-color: var(--c-brand);
		padding: 2.6rem;
		color: var(--c-white);
	}
	h2 {
		font-size: 2.2rem;
		margin: 0;
		padding: 0;
		margin-bottom: 2rem;
		line-height: 1.2;
	}
	@media (max-width: 800px) {
		.outer-holder {
			padding: 1.8rem;
		}
	}
	@media (max-width: 600px) {
		h2 {
			font-size: 1.8rem;
		}
	}
	@media (max-width: 400px) {
		h2 {
			font-size: 1.25rem;
		}
	}
</style>
