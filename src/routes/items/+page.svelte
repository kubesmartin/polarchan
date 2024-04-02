<script lang="ts">
	import ItemFilter from '$lib/components/ItemFilter.svelte';
	import LayoutRestricted from '$lib/components/LayoutRestricted.svelte';
	import { getFilterFromUrl } from '$lib/services/filterGetParamService';
	import { page } from '$app/stores';

	$: filter = getFilterFromUrl($page.url.searchParams);
	export let title = 'Browse items';
</script>

<LayoutRestricted {title}>
	<ItemFilter {filter} />
</LayoutRestricted>
