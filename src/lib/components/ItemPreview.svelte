<script lang="ts">
	import type { PoliticalItem } from '$lib/types/PoliticalItem/PoliticalItem';
	import { czechPoliticalSubjects } from '$lib/consts/czechPoliticalSubjects';
	import ThumbnailImage from './ThumbnailImage.svelte';

	export let politicalItem: PoliticalItem;

	/**
	 * Get the source of the thumbnail (Firestore storage URL)
	 * It is assumed that the first file is the thumbnail
	 * To obtain resized image, add _200x200.webp instead of the file extension.
	 * Beware, there is tokenization of the file name, so the extension is not always the last part of the file name.
	 * @param files
	 */
	const getSrcOfThumbnail = (files: string[]) => {
		const thumbnailOriginalFile = files[0];
		const parameteresOfThumbnailInGet = thumbnailOriginalFile.split('?')[1];
		// check if it has in string any signs that it is a video format
		if (thumbnailOriginalFile.includes('mp4') || thumbnailOriginalFile.includes('webm')) {
			// if it is a video, return the original file
			return (
				thumbnailOriginalFile.replace(/\.[^/.]+$/, '.jpeg') + '?' + parameteresOfThumbnailInGet
			);
		}
		const thumbnailResizedFile =
			thumbnailOriginalFile.replace(/\.[^/.]+$/, '_200x200.webp') +
			'?' +
			parameteresOfThumbnailInGet;
		return thumbnailResizedFile;
	};

	const srcOfThumbnail = getSrcOfThumbnail(politicalItem.files);

	const politicalSubjectIds = politicalItem.politicalSubjectIds;

	const politicalSubjects = politicalSubjectIds.map((id) => {
		const foundSubject = czechPoliticalSubjects.find((subject) => subject.id === id);
		if (foundSubject !== undefined) {
			return foundSubject;
		} else {
			console.error(`Political subject with id ${id} not found`);
			return { id: '', name: 'Not found', abbreviation: 'Not found', type: 'NF' };
		}
	});

	/** Transfer mass-printed to Mass Printed etc. */
	const materialType = politicalItem.type
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		.join(' ');

	/** Name consist of abbreviation of the party, type of material and year of election */
	const title = `${politicalSubjects.map((subject) => subject.abbreviation).join(', ')}`;
</script>

<div class="item-preview">
	<ThumbnailImage src={srcOfThumbnail} alt="thumbnail" />
	<h3>{title}</h3>
	<p>{materialType}, {politicalItem.year}</p>
	<a href="/item?id={politicalItem.id}">More info</a>
</div>

<style>
	.item-preview {
		display: flex;
		flex-direction: column;
		align-items: left;
		max-width: 200px;
	}
	img {
		width: 100%;
		height: auto;
	}
	h3 {
		margin: 0;
		margin-top: 0.5rem;
		font-size: 1rem;
	}
	p {
		margin: 0;
	}
	a {
		color: var(--c-brand);
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
</style>
