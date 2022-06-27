<script context="module">
	import { browser, dev } from '$app/env';

	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>not found</title>
</svelte:head>
<div>
	<h1>404</h1>
	<p>😕 The page you are looking for does not exist.</p>
</div>

<style>
	.content {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
