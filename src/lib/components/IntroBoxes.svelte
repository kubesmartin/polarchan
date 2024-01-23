<script lang="ts">
	import WidthHolder from './WidthHolder.svelte';
	import Box from './Box.svelte';
</script>

<div class="outer-holder">
	<WidthHolder>
		<div class="columns">
			<Box title="Archive of political advertisement">
				<p>
					Phasellus rhoncus. In enim a arcu imperdiet malesuada. Phasellus et lorem id felis nonummy
					placerat. Donec vitae arcu. Mauris dolor felis, sagittis at, luctus sed, aliquam non,
					tellus. Aenean placerat.
				</p>
			</Box>
			<Box title="Tool for political communication research">
				<p>
					Phasellus rhoncus. In enim a arcu imperdiet malesuada. Phasellus et lorem id felis nonummy
					placerat. Donec vitae arcu. Mauris dolor felis, sagittis at, luctus sed, aliquam non,
					tellus. Aenean placerat.
				</p>
			</Box>
		</div>
	</WidthHolder>
</div>

<style>
	.outer-holder {
		padding: 1.8rem;
		margin-bottom: 4rem;
	}
	.columns {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1.8rem;
	}
</style>
