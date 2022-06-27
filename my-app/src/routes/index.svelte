<script context="module">
	import { browser, dev } from '$app/env';

	export const hydrate = dev;

	export const router = browser;

	export const prerender = true;
</script>

<svelte:head>
	<title>Tanner Bleakley</title>
</svelte:head>

<div class="content">
	<h1>Hi I am <a href="https://www.tannerbleakley.com">Tanner</a></h1>
	<p>
		I am a software engineer based in the Charleston South Carolina area. I have
		a passion for building software that improves the lives of people.
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
