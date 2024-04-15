<script lang="ts">
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import LayoutUnrestricted from '$lib/components/LayoutUnrestricted.svelte';

	export let title = 'Source code';
</script>

<LayoutUnrestricted {title}>
	<p>
		We are commited to the principles of open science and open source. The source code of PolARCHAN
		is available on GitHub and is licensed under the General Public License (GPL) v3.0. You can use
		the code and materials for free, but you have to share the code if you modify it and add the
		same license.
	</p>
	<br />
	<ButtonLink href="https://github.com/misavojte/PolARCHAN" target="_blank"
		>GitHub Repositary</ButtonLink
	>
	<ButtonLink href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank">GPL v3.0</ButtonLink>
</LayoutUnrestricted>

<style>
	p {
		max-width: 720px;
	}
</style>
