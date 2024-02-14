<script lang="ts">
	export let message: string;
</script>

<p class="error-message">{message}</p>

<style>
	.error-message {
		color: var(--c-error);
		font-size: 0.875rem;
	}
	p {
		margin: 0;
	}
</style>
