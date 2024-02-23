<script lang="ts">
	import SignUpStepIndicator from '$lib/components/SignUpStepIndicator.svelte';
	import FileUpload from './FileUpload.svelte';
	import ItemCreationMetadata from './ItemCreationMetadata.svelte';
	import { itemCreationStore, itemCreationFilesStore } from '$lib/stores/itemCreationStore';
	import ItemCreationConfirm from './ItemCreationConfirm.svelte';

	const steps = ['Files selection', 'Add metadata', 'Confirmation'];
	let currentStep = 0;

	const switchStepByClick = (step: number) => {
		if (step < currentStep) {
			currentStep = step;
		}
	};

	const startCreation = () => {
		currentStep = 1;
	};
</script>

<div class="holder">
	{#each steps as step, i}
		<SignUpStepIndicator
			step={i + 1}
			content={step}
			status={i === currentStep ? 'active' : i < currentStep ? 'done' : 'pending'}
			on:click={() => switchStepByClick(i)}
		/>
	{/each}
</div>
<div class="step">
	{#if currentStep === 0}
		<FileUpload store={itemCreationFilesStore} on:filesUploaded={startCreation} />
	{/if}
	{#if currentStep === 1}
		<ItemCreationMetadata store={itemCreationStore} on:validSubmit={() => (currentStep = 2)} />
	{/if}
	{#if currentStep === 2}
		<ItemCreationConfirm metaDataStore={itemCreationStore} filesStore={itemCreationFilesStore} />
	{/if}
</div>

<style>
	.holder {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 0.5rem 1.5rem;
	}
	.step {
		margin-top: 4rem;
	}
</style>
