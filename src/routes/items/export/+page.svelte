<script lang="ts">
	import Export from '$lib/components/Export.svelte';
	import LayoutRestricted from '$lib/components/LayoutRestricted.svelte';
	import { getFilterFromUrl } from '$lib/services/filterGetParamService';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import Loader from '$lib/components/Loader.svelte';

	$: filter = browser && getFilterFromUrl($page.url.searchParams);
	export let title = 'Export items';
</script>

<LayoutRestricted {title}>
	{#if filter}
		<Export {filter} />
	{:else}
		<Loader />
	{/if}
</LayoutRestricted>
