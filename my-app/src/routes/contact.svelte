<script context="module">
	import { browser, dev } from '$app/env';

	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;

</script>


<svelte:head>
	<title>contact</title>
</svelte:head>

<div class="content">
  <section id="contact" class="contact-section">
    <div class="contact-links">
      <a id="profile-link" href="https://github.com/tannerpace" target="_blank" class="btn contact-details" rel="noreferrer"><i
        class="fab fa-github"></i> GitHub</a><br>
      <a href="mailto:tannerpace@gmail.com" class="btn contact-details"><i class="fas fa-at"></i> Send an
        email</a><br>
      <a href="tel:8435139583" class="btn contact-details"><i class="fas fa-mobile-alt"></i> Leave a message after the beep! 🤪</a>
    </div>
  </section>



</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
    border-top: 1px solid var(--border-color);
	}


  .contact-details {
    text-align: center;
    margin: 100 auto;
    padding: 0;
    width: 100%;
    max-width: var(--column-width);
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-bold);
    color: var(--color-primary);
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: color 0.2s ease-in-out;

  }


</style>
