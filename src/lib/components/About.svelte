<script>
	import WidthHolder from './WidthHolder.svelte';
</script>

<div class="outer">
	<WidthHolder>
		<h2>PolARCHAN brings political advertisement to researchers and students alike</h2>
		<div class="columns">
			<p>
				Phasellus rhoncus. In enim a arcu imperdiet malesuada. Phasellus et lorem id felis nonummy
				placerat. Donec vitae arcu. Mauris dolor felis, sagittis at, luctus sed, aliquam non,
				tellus. Aenean placerat. Free and opensource.
			</p>
			<p>
				Phasellus rhoncus. In enim a arcu imperdiet malesuada. Phasellus et lorem id felis nonummy
				placerat. Donec vitae arcu. Mauris dolor felis, sagittis at, luctus sed, aliquam non,
				tellus. Aenean placerat. Free and opensource.
			</p>
		</div>
	</WidthHolder>
</div>

<style>
	h2 {
		font-size: 2.4rem;
		margin: 0;
		padding: 0;
		margin-bottom: 2rem;
		line-height: 1.2;
		max-width: 920px;
		color: var(--c-brand);
	}
	p {
		line-height: 1.5;
		margin: 0;
	}
	.columns {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 2.6rem;
	}
	.outer {
		padding: 2.6rem;
		margin-block: 4rem;
	}
</style>
