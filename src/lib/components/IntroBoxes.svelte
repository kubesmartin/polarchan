<script lang="ts">
	import WidthHolder from './WidthHolder.svelte';
	import Box from './Box.svelte';
</script>

<div class="outer-holder">
	<WidthHolder>
		<div class="columns">
			<Box title="Archive of political advertisement">
				<p>
					PolARCHAN stores products of political marketing. From posters and leaflets to videospots,
					it archives materials produced during political campaigns by different political subjects
					from different countries.
				</p>
			</Box>
			<Box title="Tool for political communication research">
				<p>
					Are you a researcher in field of political communication, political marketing, visual
					politics or related field? PolARCHAN allows you to browse and analyse archived material in
					it's administration centre!
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
	@media (max-width: 880px) {
		.columns {
			grid-template-columns: 1fr;
		}
	}
</style>
