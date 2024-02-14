<script lang="ts">
	import SignUpStepIndicator from '$lib/components/SignUpStepIndicator.svelte';
	import SignUpStepPersonal from './SignUpStepPersonal.svelte';
	import type {
		SignUpPersonalInfoType,
		SignUpInstitutionInfoType
	} from '$lib/types/signUpStepTypes';

	const steps = ['Personal information', 'Institution information', 'Confirmation'];
	let currentStep = 0;
	let personalData: null | SignUpPersonalInfoType = null;
	let institutionData: null | SignUpInstitutionInfoType = null;

	$: if (personalData) {
		currentStep = 1;
	}
	$: if (institutionData) {
		currentStep = 2;
	}
</script>

<div class="holder">
	{#each steps as step, i}
		<SignUpStepIndicator
			step={i + 1}
			content={step}
			status={i === currentStep ? 'active' : i < currentStep ? 'done' : 'pending'}
		/>
	{/each}
</div>
<div class="step">
	{#if currentStep === 0}
		<SignUpStepPersonal bind:personalData />
	{/if}
	{#if currentStep === 1}
		boo
	{/if}
	{#if currentStep === 2}{/if}
</div>

<style>
	.holder {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 0.5rem 1.5rem;
	}
	.step {
		margin-top: 2rem;
	}
</style>
