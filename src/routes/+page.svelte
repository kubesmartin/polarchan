<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import BorderWrap from '$lib/components/BorderWrap.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import IntroBoxes from '$lib/components/IntroBoxes.svelte';
	import UniversityContribution from '$lib/components/UniversityContribution.svelte';
	import About from '$lib/components/About.svelte';
	import ItemShowcase from '$lib/components/ItemShowcase.svelte';
</script>

<svelte:head>
	<title>PolARCHAN: Archive, browse and analyse political advertisements</title>
	<meta
		name="description"
		content="PolARCHAN is a platform that allows you to archive, browse and analyse political advertisements."
	/>
</svelte:head>

<BorderWrap>
	<Hero>
		<h1>Page not found</h1>
	</Hero>
	<IntroBoxes />
	<ItemShowcase />
	<UniversityContribution />
	<About />
</BorderWrap>
<Footer />

<style>
</style>
