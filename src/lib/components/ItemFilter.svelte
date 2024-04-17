<script lang="ts">
	import ItemFilterForm from './ItemFilterForm.svelte';
	import type { PoliticalItemFilter } from '$lib/types/PoliticalItem/PoliticalItemFilter';
	import ItemFilterResult from './ItemFilterResult.svelte';

	export let filter: PoliticalItemFilter;
	export let user: null | false | Record<string, unknown>;
</script>

<ItemFilterForm {filter} {user} />
<br />
<br />
<ItemFilterResult {filter} />
