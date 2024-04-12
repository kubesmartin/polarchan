<script>
	import WidthHolder from './WidthHolder.svelte';
</script>

<div class="outer">
	<WidthHolder>
		<h2>PolARCHAN brings political advertisement to researchers and students alike</h2>
		<div class="columns">
			<p>
				From the evaluation of political posters and the first efforts to professionalize the
				evaluation of campaign publications to today's strongly interdisciplinary approach combining
				political science, media studies and behavioral studies - visuality plays a significant role
				in persuasive communication and political campaigns.
			</p>
			<p>
				PolARCHAN is a free open-source tool that opens up new possibilities for analyzing the
				visuality of political materials. It is available to university students and researchers as
				well as professionals. Browse different political materials or sign up and analyse them
				based on your set of criteria by political subject, eletion type, date and many more!
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
