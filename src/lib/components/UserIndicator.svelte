<script lang="ts">
	import { goto } from '$app/navigation';
	import type { IAuthService } from '$lib/interfaces/IAuthService';
	import { getContext } from 'svelte';
	import { base } from '$app/paths';
	import NavItem from './NavItem.svelte';

	const auth: IAuthService = getContext('auth');
	const store = auth.store;
	let showUserMenu = false;
</script>

<div class="user-indicator">
	{#if $store}
		<button class="user-indicator__wrap" on:click={() => (showUserMenu = !showUserMenu)}>
			<!-- Profile picture, 35x25 px, currently only first letter of the name -->
			<div class="user-indicator__profile-picture">
				{$store.displayName[0]}
			</div>
		</button>
	{:else}
		<div class="user-indicator__login">
			<NavItem href="/login" label="Log in" />
			<NavItem href="/signup" label="Sign up" isHighlighted={true} />
		</div>
	{/if}
	{#if showUserMenu && $store}
		<div class="user-indicator__menu">
			<span class="bold">{$store.displayName}</span>
			<span>{$store.email}</span>
			<a href={base + '/logout'} class="logout">Log out</a>
		</div>
	{/if}
</div>

<style>
	.user-indicator {
		display: flex;
		align-items: center;
		position: relative;
	}
	.user-indicator__wrap {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		appearance: none;
		border: none;
		height: 35px;
		background: none;
		color: var(--c-brand);
		padding: 0 1rem;
		cursor: pointer;
		&:hover {
			opacity: 0.8;
		}
	}
	.user-indicator__profile-picture {
		height: 100%;
		aspect-ratio: 1/1;
		border-radius: 50%;
		background-color: var(--c-black);
		color: var(--c-white);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.2rem;
	}
	.user-indicator__login {
		display: flex;
		gap: 0.5rem;
	}
	.user-indicator__menu {
		position: absolute;
		top: 45px;
		right: 0;
		background: var(--c-white);
		border: 1px solid var(--c-accent-black);
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		border-radius: 0.5rem;
		padding: 0.5rem;
	}
	span {
		font-size: 0.875rem;
	}
	.bold {
		font-weight: bold;
	}
	a.logout {
		background: none;
		border: none;
		color: var(--c-brand);
		cursor: pointer;
		font-size: 0.875rem;
		padding: 0;
		width: fit-content;
		text-decoration: none;
		font-weight: bold;
	}
	a.logout:hover {
		opacity: 0.5;
	}
</style>
