<div class="wrap">
	<div class="loader"></div>
</div>

<style>
	.wrap {
		display: flex;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		width: 100%;
		padding: 20px;
		background: var(--c-brand);
	}
	.loader {
		width: fit-content;
		font-weight: bold;
		font-family: monospace;
		font-size: 30px;
		overflow: hidden;
	}
	.loader::before {
		content: 'Loading...';
		color: var(--c-white);
		text-shadow:
			0 0 0 var(--c-white),
			10ch 0 0 var(--c-brand),
			20ch 0 0 var(--c-white);
		background: linear-gradient(
				90deg,
				var(--c-white) 0 calc(100% / 3),
				var(--c-white) 0 calc(2 * 100% / 3),
				var(--c-white) 0 0
			)
			left/300% 100%;
		animation: l23 2s infinite;
	}

	@keyframes l23 {
		50% {
			background-position: center;
			text-shadow:
				-10ch 0 0 var(--c-white),
				0 0 0 var(--c-brand),
				10ch 0 0 var(--c-white);
		}
		100% {
			background-position: right;
			text-shadow:
				-20ch 0 0 var(--c-white),
				-10ch 0 0 var(--c-brand),
				0 0 0 var(--c-white);
		}
	}
</style>
