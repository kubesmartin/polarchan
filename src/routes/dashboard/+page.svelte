<script lang="ts">
	import LayoutRestricted from '$lib/components/LayoutRestricted.svelte';
	import type { IAuthService } from '$lib/interfaces/IAuthService';
	import { getContext } from 'svelte';
	import { base } from '$app/paths';

	const auth: IAuthService = getContext('auth');
	const user = auth.store;
</script>

<LayoutRestricted title="Dashboard">
	{#if $user}
		<p>
			Welcome, {$user.displayName}! PolARCHAN is still under development, and is only a
			technological demonstration at the moment. Please check back later for more features.
		</p>
		<div class="grid">
			<a href={base + '/items/create'} class="big">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="50"
					height="50"
					fill="currentColor"
					class="bi bi-plus-circle-fill"
					viewBox="0 0 16 16"
				>
					<path
						d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"
					/>
				</svg>
				Add item
			</a>
			<a href={base + '/items'} class="big">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="50"
					height="50"
					fill="currentColor"
					class="bi bi-search"
					viewBox="0 0 16 16"
				>
					<path
						d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
					/>
				</svg>
				Search items
			</a>
			<a href={base + '/queries'} class="big">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="50"
					height="50"
					fill="currentColor"
					class="bi bi-filter-circle-fill"
					viewBox="0 0 16 16"
				>
					<path
						d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M3.5 5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1M5 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5"
					/>
				</svg>
				My filter queries
			</a>
		</div>
	{/if}
</LayoutRestricted>

<style>
	p {
		max-width: 720px;
	}
	.big {
		font-size: 1.25rem;
		width: 100%;
		box-sizing: border-box;
		display: inline-flex;
		color: var(--c-white);
		background: var(--c-brand);
		padding: 0.5rem 1rem;
		text-decoration: none;
		justify-content: center;
		align-items: center;
		aspect-ratio: 1/1;
		flex-direction: column;
		gap: 0.5rem;
	}
	.big:hover {
		opacity: 0.8;
	}
	.grid {
		display: grid;
		margin-top: 2rem;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1rem;
		max-width: 720px;
	}
</style>
