<script context="module">
  export const prerender = false;
</script>

<script>
  import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <div class="content">
    <h1>Hi I am <a href="https://tannerbleakley.com">Tanner</a></h1>
    <p>
      I am a software engineer based in the Charleston South Carolina area. I have a passion for
      building software that improves the lives of people.
    </p>
  </div>
</section>

<style>
  .content {
    width: 100%;
    max-width: var(--column-width);
    margin: var(--column-margin-top) auto 0 auto;
  }
</style>
