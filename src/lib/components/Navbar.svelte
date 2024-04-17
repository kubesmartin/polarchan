<script lang="ts">
	import WidthHolder from './WidthHolder.svelte';
	import NavItem from './NavItem.svelte';
	import PolarchanLogo from './PolarchanLogo.svelte';
	import UserIndicator from './UserIndicator.svelte';

	const menuItems = [
		{
			label: 'Home',
			href: '/'
		},
		{
			label: 'Browse',
			href: '/items'
		}
	];
</script>

<div class="outer-holder">
	<WidthHolder>
		<div class="holder">
			<PolarchanLogo />
			<nav>
				{#each menuItems as item}
					<NavItem href={item.href} label={item.label} />
				{/each}
				<UserIndicator />
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
	nav {
		display: flex;
	}
	@media (max-width: 900px) {
		.holder {
			flex-direction: column;
		}
	}
</style>
