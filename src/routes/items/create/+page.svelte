<script>
	import ItemCreationStep from '$lib/components/ItemCreationStep.svelte';
	import LayoutRestricted from '$lib/components/LayoutRestricted.svelte';

	export let title = 'Create new item';
</script>

<LayoutRestricted {title}>
	<ItemCreationStep />
</LayoutRestricted>
