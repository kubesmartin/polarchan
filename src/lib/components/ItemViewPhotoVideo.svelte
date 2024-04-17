<script lang="ts">
	export let src: string;
	export let type: string;
</script>

<video controls width="100%">
	<source {src} {type} />
	<!-- Assume MP4, but consider dynamically setting the MIME type -->
	Your browser does not support the video tag.
</video>
