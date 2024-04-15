<script lang="ts">
	export let label: string;
	export let value: string | null = '';
	export let id: string;
	export let placeholder: string = '';
	export let required: boolean = false;
	export let disabled: boolean = false;
	export let options: Array<{ id: string | null; name: string }> = []; // Assuming options is an array of objects with value and text
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
			<option value={option.id} selected={option.id === value}>{option.name}</option>
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
	:disabled {
		background: var(--c-accent-black);
		color: var(--c-accent-white);
		cursor: not-allowed;
	}
	select:required:invalid {
		color: var(--c-accent-black);
	}
	option[value=''][disabled] {
		display: none;
	}
	option {
		color: var(--c-black);
	}
</style>
