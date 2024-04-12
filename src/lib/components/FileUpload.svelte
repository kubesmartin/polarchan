<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { createEventDispatcher } from 'svelte';
	import SubmitButton from './SubmitButton.svelte';

	export let store: Writable<File[]>;
	let blockSubmit = false;

	const dispatch = createEventDispatcher();

	function handleFiles(selectedFiles: FileList) {
		const fileList = Array.from(selectedFiles);
		store.set(fileList);
		blockSubmit = false;
	}

	function handleDragOver(event: DragEvent) {
		event.preventDefault();
	}

	function handleDrop(event: DragEvent) {
		event.preventDefault();
		if (event.dataTransfer?.files) {
			handleFiles(event.dataTransfer.files);
		}
	}

	const handleChange = (event: Event) => {
		const input = event.target as HTMLInputElement;
		if (input.files) {
			handleFiles(input.files);
		}
	};

	let fileInput: HTMLInputElement;

	function openFileDialog() {
		// if has files, block submit
		if ($store.length > 0) {
			blockSubmit = true;
		}
		fileInput.click(); // Trigger the file input click event
	}

	function proceed() {
		if (blockSubmit) {
			return;
		}
		if ($store.length > 0) {
			dispatch('filesUploaded');
		}
	}
</script>

<form on:submit|preventDefault={proceed}>
	<div class="wrapper">
		<div
			on:dragover|preventDefault={handleDragOver}
			on:drop|preventDefault={handleDrop}
			class="drag-drop-area"
			aria-label="Drag and drop files here or click to select files"
			aria-roledescription="file input"
			role="button"
			tabindex="0"
		>
			Drag and drop files for the item here or
			<input type="file" multiple on:change={handleChange} hidden bind:this={fileInput} />
			<button class="visible-button" tabindex="-1" on:click={openFileDialog}> Select files </button>
			<span class="selected-files" aria-live="polite" role="status">
				{#if $store.length === 0}
					No files selected
				{:else}
					Selected files: {#each $store as file, i}
						{file.name}
						{#if i !== $store.length - 1},
						{/if}
					{/each}
				{/if}
			</span>
		</div>
	</div>
	<div class="submit-button-container">
		<SubmitButton isDisabled={$store.length === 0}>Next step</SubmitButton>
	</div>
</form>

<style>
	.wrapper {
		background: var(--c-brand);
		padding: 20px;
		gap: 20px;
		display: flex;
		flex-direction: column;
	}
	.drag-drop-area {
		border: 2px solid var(--c-brand-light);
		padding: 20px;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: var(--c-white);
		font-family: var(--ff-primary);
		gap: 10px;
		min-height: 200px;
		justify-content: center;
	}
	button {
		background: var(--c-brand);
		color: var(--c-white);
		border: 1px solid;
		cursor: pointer;
		padding: 10px 20px;
		font-family: var(--ff-primary);
		font-size: 1rem;
		appearance: none;
		width: fit-content;
	}
	.selected-files {
		font-size: 0.8rem;
	}
	.submit-button-container {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		margin-top: 20px;
	}
</style>
