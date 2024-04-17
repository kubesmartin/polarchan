<script lang="ts">
	import { version } from '$lib/version';
</script>

<footer>
	<div class="inner-container">
		<div class="info">
			<p>
				PolARCHAN, version {version}
			</p>
			<p>
				Created by <a href="https://kubesmartin.cz" target="_blank">Martin Kubeš</a> and
				<a href="https://vojtechovska.com" target="_blank">Michaela Vojtechovska</a>
			</p>
			<p>
				<a href="https://kpes.upol.cz/en/" target="_blank">
					Department of Politics and European Studies, Palacký University Olomouc
				</a>
			</p>
		</div>
	</div>
</footer>

<style>
	footer {
		background-color: var(--c-brand);
		padding: 1.8rem;
		padding-block: 4rem;
		font-size: 0.8rem;
		box-sizing: border-box;
	}

	.inner-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: var(--max-width);
		margin: auto;
	}

	.info {
		display: flex;
		flex-direction: column;
	}

	.info p {
		margin: 0;
		color: var(--c-brand-light);
	}
	a {
		color: var(--c-brand-light);
		text-decoration: dotted;
		&:hover {
			color: var(--c-accent-brand);
		}
	}
</style>
