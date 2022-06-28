<script context="module">
  import { browser, dev } from '$app/env';

  export const hydrate = dev;
  export const router = browser;
  export const prerender = false;
</script>

<svelte:head>
  <title>resume</title>
</svelte:head>

<div id="resume" class="content">
  <a
    class="download-link"
    href="https://drive.google.com/file/d/1WIltaHkZxwX0Z9sCnH8nMzj6Cemuuw4r/view?usp=sharing"
  >
    <h4 class="card-title">
      <i
        ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          ><path
            d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479 6.908l-4-4h3v-4h2v4h3l-4 4z"
          /></svg
        ></i
      > Resume
    </h4>
  </a>
  <div class="img-container">
    <img class="resume-svg" src="resume.svg" alt="resume" />
  </div>
</div>

<style>
  .content {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .card-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .download-link {
    display: block;
    text-align: center;
    margin-top: 1rem;
  }

  .image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .resume-svg {
    width: 100%;
    max-width: var(--column-width);
    margin: var(--column-margin-top) auto 0 auto;
  }
</style>
