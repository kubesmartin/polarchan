<script lang="ts">
	import ItemFilterForm from './ItemFilterForm.svelte';
	import type { PoliticalItemFilter } from '$lib/types/PoliticalItem/PoliticalItemFilter';
	import ItemFilterResult from './ItemFilterResult.svelte';

	export let filter: PoliticalItemFilter;
</script>

<ItemFilterForm {filter} />
<br />
<br />
<ItemFilterResult {filter} />
