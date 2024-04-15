<script lang="ts">
	const menu = [
		{
			groupName: 'Political materials',
			items: [
				{
					name: 'Browse items',
					link: '/items'
				},
				{
					name: 'Create item',
					link: '/items/create'
				}
			]
		},
		{
			groupName: 'Queries',
			items: [
				{
					name: 'My saved queries',
					link: '/queries'
				}
			]
		},
		{
			groupName: 'Account',
			items: [
				{
					name: 'Dashboard',
					link: '/dashboard'
				},
				{
					name: 'Settings',
					link: '/settings'
				},
				{
					name: 'Log out',
					link: '/logout'
				}
			]
		},
		{
			groupName: 'Other',
			items: [
				{
					name: 'GDPR',
					link: '/gdpr'
				},
				{
					name: 'Terms of service',
					link: '/terms'
				},
				{
					name: 'Source code',
					link: '/source'
				}
			]
		}
	];
</script>

<nav class="secondary-menu">
	{#each menu as group}
		<div class="secondary-menu__group">
			<h3>{group.groupName}</h3>
			<ul>
				{#each group.items as item}
					<li>
						<a href={item.link}>{item.name}</a>
					</li>
				{/each}
			</ul>
		</div>
	{/each}
</nav>

<style>
	.secondary-menu {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.secondary-menu__group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.secondary-menu__group h3 {
		font-size: 1.25rem;
		color: var(--c-black);
		margin: 0;
	}

	.secondary-menu__group ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.secondary-menu__group li {
		margin: 0;
		padding: 0;
		max-width: 225px;
		margin-bottom: 0.5rem;
		line-height: 1.15;
	}

	.secondary-menu__group a {
		text-decoration: none;
		color: var(--c-black);
	}
	.secondary-menu__group a:hover {
		text-decoration: underline;
	}
</style>
