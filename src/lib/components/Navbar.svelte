<script lang="ts">
	import WidthHolder from './WidthHolder.svelte';
	import NavItem from './NavItem.svelte';
	import PolarchanLogo from './PolarchanLogo.svelte';

	const menuItems = [
		{
			label: 'Home',
			href: '/'
		},
		{
			label: 'Browse',
			href: '/'
		},
		{
			label: 'Register',
			href: '/',
			isHighlighted: true
		}
	];
</script>

<div class="outer-holder">
	<WidthHolder>
		<div class="holder">
			<PolarchanLogo />
			<nav>
				{#each menuItems as item}
					<NavItem href={item.href} label={item.label} isHighlighted={item.isHighlighted} />
				{/each}
			</nav>
		</div>
	</WidthHolder>
</div>

<style>
	.outer-holder {
		background-color: none;
		padding-block: 1.8rem;
	}
	.holder {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1.8rem;
	}
</style>
