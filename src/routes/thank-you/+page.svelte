<script lang="ts">
	import ButtonBase from '$lib/components/ButtonBase.svelte';
	import LayoutRestricted from '$lib/components/LayoutRestricted.svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { itemCreationStore, itemCreationFilesStore } from '$lib/stores/itemCreationStore';
	import ButtonLink from '$lib/components/ButtonLink.svelte';

	export let title = 'Thank you for your submission';

	const goToCreateItem = () => {
		goto(`${base}/create-item`);
	};

	const startNewBlankCreation = () => {
		// Reset the item creation store
		itemCreationStore.set([]);

		// Reset the item creation files store
		itemCreationFilesStore.set([]);

		// Go to the first step
		goToCreateItem();
	};

	const startNewCreationWithSameMetadata = () => {
		// Reset the item creation files store
		itemCreationFilesStore.set([]);

		// Go to the second step
		goToCreateItem();
	};

	// get itemHref from search param id of the url and set it to the href of the button
	const itemHrefIdParam: string | null = browser ? $page.url.searchParams.get('id') : null;

	const itemHref = `${base}/item?id=${itemHrefIdParam}`;
</script>

<LayoutRestricted {title}>
	<p>Your item has been successfully submitted. Thank you for contributing to our platform!</p>
	<div class="controls">
		<ButtonBase on:click={startNewCreationWithSameMetadata}
			>Submit another (same metadata prefilled)</ButtonBase
		>
		<ButtonBase on:click={startNewBlankCreation}>Submit another</ButtonBase>
		<ButtonLink href={itemHref} disabled={!itemHrefIdParam}>View your item</ButtonLink>
	</div>
</LayoutRestricted>

<style>
	.controls {
		margin-top: 2rem;
	}
</style>
