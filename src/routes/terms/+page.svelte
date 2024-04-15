<script lang="ts">
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import LayoutUnrestricted from '$lib/components/LayoutUnrestricted.svelte';
	import { base } from '$app/paths';

	export let title = 'Terms and conditions';
</script>

<LayoutUnrestricted {title}>
	<p>
		As this is only technological demonstration, the terms and conditions follows the General Public
		License (GPL) v3.0. Please refer to the official GPL v3.0 documentation for more information. If
		cloud service runs out of free tier, the service can be shortly unavailable. The service is
		provided as is and no guarantees are given. The service is not suitable for production use.
	</p>
	<p>
		For user protection, we follow the General Data Protection Regulation (GDPR). Please refer to
		our GDPR documentation for more information.
	</p>
	<p>
		Tldr; you can use the code and materials for free, but you have to share the code if you modify
		it and add the same license.
	</p>
	<br />
	<ButtonLink href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank">GPL v3.0</ButtonLink>
	<ButtonLink href={base + '/gdpr'}>PolARCHAN GDPR</ButtonLink>
</LayoutUnrestricted>

<style>
	p {
		max-width: 720px;
	}
</style>
