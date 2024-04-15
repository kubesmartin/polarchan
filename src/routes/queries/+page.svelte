<script lang="ts">
	import LayoutRestricted from '$lib/components/LayoutRestricted.svelte';
	import Queries from '$lib/components/Queries.svelte';

	export let title = 'My saved queries';
</script>

<LayoutRestricted {title}>
	<Queries />
</LayoutRestricted>
