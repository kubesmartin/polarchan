<script lang="ts">
	import SignUpStepIndicator from '$lib/components/SignUpStepIndicator.svelte';
	import SignUpStepPersonal from './SignUpStepPersonal.svelte';
	import SignUpStepInstitution from './SignUpStepInstitution.svelte';
	import { personalInfoFormData, institutionInfoFormData } from '$lib/stores/personalInfoStore';
	import SignUpStepConfirmation from './SignUpStepConfirmation.svelte';

	const steps = ['Personal information', 'Institution information', 'Confirmation'];
	let currentStep = 0;

	const switchStepByClick = (step: number) => {
		if (step < currentStep) {
			currentStep = step;
		}
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
		<SignUpStepPersonal store={personalInfoFormData} on:validSubmit={() => (currentStep = 1)} />
	{/if}
	{#if currentStep === 1}
		<SignUpStepInstitution
			store={institutionInfoFormData}
			on:validSubmit={() => (currentStep = 2)}
		/>
	{/if}
	{#if currentStep === 2}
		<SignUpStepConfirmation
			personalStore={personalInfoFormData}
			institutionStore={institutionInfoFormData}
		/>
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
