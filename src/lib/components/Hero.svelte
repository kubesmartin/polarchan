<script lang="ts">
	import WidthHolder from '$lib/components/WidthHolder.svelte';
	import Button from './Button.svelte';
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
					<Button href="/browse">Start browsing</Button>
				</div>
				<div class="quote-holder">
					<Quote
						>Phasellus rhoncus. In enim a arcu imperdiet malesuada. Phasellus et lorem id felis
						nonummy placerat. Donec vitae arcu. Mauris dolor felis, sagittis at, luctus sed, aliquam
						non, tellus. Aenean placerat. Free and opensource.</Quote
					>
				</div>
			</div>
		</WidthHolder>
	</div>
</header>

<style>
	header {
		background-image: url('./PolARCHAN_hero_bg.jpg');
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
