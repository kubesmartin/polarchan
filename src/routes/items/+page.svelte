<script lang="ts">
	import ItemFilter from '$lib/components/ItemFilter.svelte';
	import LayoutUnrestricted from '$lib/components/LayoutUnrestricted.svelte';
	import { getFilterFromUrl } from '$lib/services/filterGetParamService';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { getContext } from 'svelte';
	import type { IAuthService } from '$lib/interfaces/IAuthService';
	import type { PoliticalItemFilter } from '$lib/types/PoliticalItem/PoliticalItemFilter';

	const baseFilter: PoliticalItemFilter = {
		type: null,
		year: {
			from: null,
			to: null
		},
		politicalParty: [],
		electionType: [],
		order: {
			by: 'year',
			direction: 'desc'
		}
	};

	$: filter = (browser && getFilterFromUrl($page.url.searchParams)) || baseFilter;
	export let title = 'Browse items';

	const auth: IAuthService = getContext('auth');
	const user = auth.store;
</script>

<LayoutUnrestricted {title}>
	<ItemFilter {filter} user={$user} />
</LayoutUnrestricted>
