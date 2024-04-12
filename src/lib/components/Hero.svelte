<script lang="ts">
	import WidthHolder from '$lib/components/WidthHolder.svelte';
	import ButtonLink from './ButtonLink.svelte';
	import Navbar from './Navbar.svelte';
	import Quote from './Quote.svelte';
</script>

<header>
	<Navbar />
	<div class="outer-holder">
		<WidthHolder>
			<div class="holder">
				<div>
					<h1>Archive, browse and analyse political advertisement.</h1>
					<ButtonLink href="/items">Start browsing</ButtonLink>
				</div>
				<div class="quote-holder">
					<Quote
						>PolARCHAN unlocks new ways of analysing political materials and their visual aspects.
						Discover visuals from political parties, digitized on one simple platform, with
						pre-defined and standardized attributes, that make them ready for research.</Quote
					>
				</div>
			</div>
		</WidthHolder>
	</div>
</header>

<style>
	header {
		background-image: url('/PolARCHAN_hero_bg.jpg');
		background-size: cover;
		background-position: center;
		padding: 1.8rem;
		height: 650px;
		position: relative;
		display: flex;
		flex-direction: column;
	}
	header::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100px;
		background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--c-white));
	}
	.outer-holder {
		display: flex;
		align-items: center;
		flex-grow: 1;
	}
	.holder {
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-gap: 1.8rem;
		align-items: center;
		margin: auto;
	}
	.quote-holder {
		margin-top: 3.5rem;
	}
	h1 {
		font-size: 3.5rem;
		color: var(--c-brand);
		margin: 0;
		line-height: 1.2;
		margin-bottom: 2rem;
	}
</style>
