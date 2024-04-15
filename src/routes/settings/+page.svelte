<script lang="ts">
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import LayoutRestricted from '$lib/components/LayoutRestricted.svelte';
	import { base } from '$app/paths';

	export let title = 'Account settings';
</script>

<LayoutRestricted {title}>
	<p>
		Account settings can be changed currently mainly by contacting the administrator. We are working
		on providing a user-friendly interface for changing your account settings. Thank you for your
		patience.
	</p>
	<div class="controls">
		<ButtonLink href={base + '/reset-password'}>Reset password</ButtonLink>
		<ButtonLink href={'mailto:kontakt@kubesmartin.cz'}>Contact administrator</ButtonLink>
		<ButtonLink href={base + '/logout'}>Log out of your account</ButtonLink>
		<ButtonLink href={base + '/dashboard'}>Back to Dashboard</ButtonLink>
	</div>
</LayoutRestricted>

<style>
	p {
		max-width: 720px;
	}
	.controls {
		margin-top: 2rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		max-width: 280px;
	}
</style>
