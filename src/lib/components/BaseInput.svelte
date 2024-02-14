<script lang="ts">
	export let label: string;
	export let value: string = '';
	export let id: string;
	export let placeholder: string = '';
	export let required: boolean = false;
	export let disabled: boolean = false;
	export let type: 'text' | 'email' | 'password' = 'text';
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
	{#if type === 'text'}
		<input type="text" {id} bind:value on:input {placeholder} {required} {disabled} />
	{:else if type === 'email'}
		<input type="email" {id} bind:value on:input {placeholder} {required} {disabled} />
	{:else if type === 'password'}
		<input type="password" {id} bind:value on:input {placeholder} {required} {disabled} />
	{/if}
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
	input {
		display: block;
		width: 100%;
		padding: 0.5rem;
		font-size: 1rem;
		border: 1px solid var(--c-black);
		color: var(--c-black);
		box-sizing: border-box;
	}
	.isErrored {
		color: var(--c-error);
	}
	.isErrored input {
		border-color: var(--c-error);
	}
</style>
