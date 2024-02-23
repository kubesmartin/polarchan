<script lang="ts">
	export let label: string;
	export let value: string = '';
	export let id: string;
	export let placeholder: string = '';
	export let required: boolean = false;
	export let disabled: boolean = false;
	export let options: Array<{ value: string; text: string }> = []; // Assuming options is an array of objects with value and text
	export let isErrored: boolean = false;
</script>

<label for={id} class:isErrored>
	<span class="label">
		<span>
			{label}
		</span>
		{#if required}
			<span> * </span>
		{/if}
	</span>
	<select {id} bind:value {required} {disabled}>
		<option value="" disabled>{placeholder}</option>
		{#each options as option}
			<option selected={option.value === value} value={option.value}>
				{option.text}
			</option>
		{/each}
	</select>
</label>

<style>
	label {
		display: block;
		color: var(--c-black);
	}
	span.label {
		padding-inline: 0.5rem;
		font-size: 0.8rem;
	}
	select {
		display: block;
		width: 100%;
		padding: 0.5rem;
		font-size: 1rem;
		border: 1px solid var(--c-black);
		background: var(--c-white);
		color: var(--c-black);
		box-sizing: border-box;
	}
	.isErrored {
		color: var(--c-error);
	}
	.isErrored select {
		border-color: var(--c-error);
	}
</style>
