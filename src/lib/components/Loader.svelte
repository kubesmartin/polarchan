<div class="loader"></div>

<style>
	.loader {
		width: fit-content;
		font-weight: bold;
		font-family: monospace;
		font-size: 30px;
		overflow: hidden;
	}
	.loader::before {
		content: 'Loading...';
		color: var(--c-brand);
		text-shadow:
			0 0 0 var(--c-brand),
			10ch 0 0 var(--c-white),
			20ch 0 0 var(--c-brand);
		background: linear-gradient(
				90deg,
				var(--c-brand) 0 calc(100% / 3),
				var(--c-brand) 0 calc(2 * 100% / 3),
				var(--c-brand) 0 0
			)
			left/300% 100%;
		animation: l23 2s infinite;
	}

	@keyframes l23 {
		50% {
			background-position: center;
			text-shadow:
				-10ch 0 0 var(--c-brand),
				0 0 0 var(--c-white),
				10ch 0 0 var(--c-brand);
		}
		100% {
			background-position: right;
			text-shadow:
				-20ch 0 0 var(--c-brand),
				-10ch 0 0 var(--c-white),
				0 0 0 var(--c-brand);
		}
	}
</style>
