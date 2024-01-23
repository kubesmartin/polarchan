<script lang="ts">
	import WidthHolder from './WidthHolder.svelte';

	const getItems = async () => {
		/** Currently dummy placeholder
		 * which will never resolve
		 */
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				reject(new Error('Failed to fetch items from polARCHAN'));
			}, 10000);
		});
	};

	const items: Promise<any> = getItems();
</script>

<div class="outer">
	<WidthHolder>
		<h2>Newest items archived in polARCHAN</h2>
		<div class="inner">
			{#await items}
				<div class="placeholder" />
				<div class="placeholder" />
				<div class="placeholder" />
				<div class="placeholder" />
			{:then data}
				{data}
			{:catch error}
				<p>{error.message}</p>
			{/await}
		</div>
	</WidthHolder>
</div>

<style>
	.outer {
		padding: 2.6rem;
	}
	.inner {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-gap: 1.8rem;
	}
	h2 {
		margin: 0;
		padding: 0;
		font-size: 2.4rem;
		color: var(--c-brand);
		margin-bottom: 2rem;
	}
	.placeholder {
		background-color: #ccc;
		height: 300px;
		width: 100%;
	}
</style>
