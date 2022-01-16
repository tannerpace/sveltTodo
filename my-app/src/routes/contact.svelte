<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<div class="content">
  <section id="contact" class="contact-section">
    <div class="contact-section-header">
      <h2>Get in touch to chat about a project!</h2>

      

    </div>
    <div class="contact-links">

      <a id="profile-link" href="https://github.com/tannerpace" target="_blank" class="btn contact-details" rel="noreferrer"><i
        class="fab fa-github"></i> GitHub</a>

      <a href="mailto:tannerpace@gmail.com" class="btn contact-details"><i class="fas fa-at"></i> Send an
        email</a>
      <a href="tel:8435139583" class="btn contact-details"><i class="fas fa-mobile-alt"></i> Leave a message after the beep! 🤪</a>
    </div>
  </section>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
