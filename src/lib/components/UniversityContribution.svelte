<script>
	import WidthHolder from './WidthHolder.svelte';

	const universities = [
		{
			name: 'Masaryk University',
			logo: './universities/MUNI.png'
		},
		{
			name: 'Palacký University Olomouc',
			logo: './universities/UP.png'
		},
		{
			name: 'Charles University',
			logo: './universities/CUNI.png'
		}
	];
</script>

<WidthHolder>
	<div class="holder">
		<h2>Contributing universities</h2>
		<div class="showcase">
			{#each universities as university}
				<img src={university.logo} alt={university.name} />
			{/each}
		</div>
	</div>
</WidthHolder>

<style>
	.holder {
		background: var(--c-brand);
		color: var(--c-white);
		padding: 2.6rem;
		text-align: center;
		margin-block: 4rem;
	}

	h2 {
		font-size: 2.4rem;
		margin: 0;
		padding: 0;
		margin-bottom: 2rem;
		line-height: 1.2;
	}

	img {
		height: 100px;
		width: auto;
		flex-shrink: 0;
		cursor: pointer;
		&:hover {
			opacity: 0.8;
		}
	}

	.showcase {
		display: flex;
		justify-content: center;
		gap: 2.6rem;
		align-items: center;
		flex-wrap: wrap;
	}
</style>
