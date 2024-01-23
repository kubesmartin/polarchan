<script lang="ts">
	import WidthHolder from './WidthHolder.svelte';
	import NavItem from './NavItem.svelte';

	const menuItems = [
		{
			label: 'Home',
			href: '/'
		},
		{
			label: 'Browse',
			href: '/browse'
		},
		{
			label: 'Register',
			href: '/about',
			isHighlighted: true
		}
	];
</script>

<div class="outer-holder">
	<WidthHolder>
		<div class="holder">
			<img src="./PolARCHAN.png" alt="PolARCHAN logo" class="logo" />
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
	.logo {
		height: 35px;
		width: auto;
		flex-shrink: 0;
	}
	.holder {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1.8rem;
	}
</style>
