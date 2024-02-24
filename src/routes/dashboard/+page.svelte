<script lang="ts">
	import LayoutRestricted from '$lib/components/LayoutRestricted.svelte';
	import type { IAuthService } from '$lib/interfaces/IAuthService';
	import { getContext } from 'svelte';

	const auth: IAuthService = getContext('auth');
	const user = auth.store;
</script>

<LayoutRestricted title="Dashboard">
	{#if $user}
		<p>Welcome, {$user.displayName}!</p>
	{/if}
</LayoutRestricted>
