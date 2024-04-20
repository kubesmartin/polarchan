<script lang="ts">
	import type { PoliticalItem } from '$lib/types/PoliticalItem/PoliticalItem';
	import { fieldsInMeta } from '$lib/config/meta';
	import ButtonBase from './ButtonBase.svelte';
	import ItemViewPhoto from './ItemViewPhoto.svelte';
	import ButtonLink from './ButtonLink.svelte';
	import { base } from '$app/paths';
	import Heading2 from './Heading2.svelte';

	export let item: PoliticalItem;

	// there are search param after extension, so we look for
	// regex match for the extension which is between dot and the ? or end of string
	const getExtension = (filename: string) => {
		const match = filename.match(/\.([^.?]+)(?:\?|$)/);
		return match ? match[1] : '';
	};

	// from extension, return iamge or video
	const getType = (extension: string): 'image' | 'video' | 'other' => {
		if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(extension)) {
			return 'image';
		}
		if (['mp4', 'webm', 'ogg'].includes(extension)) {
			return 'video';
		}
		return 'other';
	};

	const files = item.files.map((srcLinkToFirebase) => {
		const extension = getExtension(srcLinkToFirebase);
		const type = getType(extension);
		return {
			src: srcLinkToFirebase,
			isImage: type === 'image',
			type: type + '/' + extension
		};
	});

	// parse the item to fields to show in item view
	// iterate through item key value pairs and show them
	// use fieldsInMeta to parse the fields values
	const fieldsUnsorted: Array<{ id: string; label: string; value: string }> = [];

	Object.entries(item).forEach(([key, originalValue]) => {
		// if uid or files, skip
		if (key === 'uid' || key === 'files') {
			return;
		}

		// if added, format to date
		if (key === 'added') {
			const date = new Date(originalValue as number);
			const day = date.getDate();
			const month = date.getMonth() + 1;
			const year = date.getFullYear();
			const formattedDate = `${day}. ${month}. ${year}`;
			fieldsUnsorted.push({
				label: 'Added',
				value: formattedDate,
				id: key
			});
			return;
		}

		let value = originalValue === null ? '' : originalValue;

		// label is by default the key but the camelCase is converted to space separated words
		let label = key.replace(/([A-Z])/g, ' $1').trim();

		const field = fieldsInMeta.find((field) => field.id === key);

		if (field) {
			if (field.type === 'select') {
				value = field.options.find((option) => option.id === value)?.name || value;
			} else if (field.type === 'select-multiple' && Array.isArray(value)) {
				value = value.map((val) => field.options.find((option) => option.id === val)?.name || val);
			}
			label = field.label;
		}
		// stringify the value (if it is an array, join it with ', ')
		if (Array.isArray(value)) {
			value = value.join(', ');
		} else {
			value = value.toString();
		}
		fieldsUnsorted.push({
			label,
			value,
			id: key
		});
	});

	// sort fields in a way, that order of fieldsInMeta is preserved
	// and the rest is last, not first
	const fields = fieldsUnsorted.sort((a, b) => {
		let indexA = fieldsInMeta.findIndex((field) => field.id === a.id);
		let indexB = fieldsInMeta.findIndex((field) => field.id === b.id);
		if (indexA === -1) {
			indexA = fieldsInMeta.length;
		}
		if (indexB === -1) {
			indexB = fieldsInMeta.length;
		}
		return indexA - indexB;
	});
</script>

<div class="grid">
	<div>
		<Heading2 text={'ID ' + item.id} />
		<div class="fields">
			{#each fields as field}
				{#if field.label !== 'id' && field.value !== ''}
					<div class="field">
						<div class="label">{field.label}</div>
						<div class="value">{field.value}</div>
					</div>
				{/if}
			{/each}
		</div>
		<p>
			Found an issue with this item? <a href="mailto:kontakt@kubesmartin.cz"
				>Contact administrator</a
			>
		</p>
		<div class="buttons">
			<ButtonBase on:click={() => window.history.back()}>Navigate back</ButtonBase>
			<ButtonLink href={base + '/items'}>All items</ButtonLink>
		</div>
	</div>
	<ItemViewPhoto {files} />
</div>

<style>
	.fields {
		display: grid;
		/*grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));*/
		grid-gap: 1rem;
	}

	.field {
		display: flex;
		flex-direction: column;
	}

	.label {
		font-weight: bold;
	}

	.buttons {
		margin-top: 2rem;
	}
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 4rem;
	}
	@media (max-width: 1200px) {
		.grid {
			grid-template-columns: 1fr;
			gap: 2rem;
			/* reverse order */
		}
		.grid > div:nth-child(1) {
			order: 2;
		}
	}
</style>
