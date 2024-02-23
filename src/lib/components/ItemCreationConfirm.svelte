<script lang="ts">
	import type { PoliticalItemForm } from '$lib/stores/itemCreationStore';
	import { saveItem } from '$lib/utils/saveItem';
	import type { Writable } from 'svelte/store';

	export let metaDataStore: Writable<PoliticalItemForm>;
	export let filesStore: Writable<File[]>;

	saveItem($metaDataStore, $filesStore);
</script>
