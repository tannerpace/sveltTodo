<script context="module">
	import { browser, dev } from '$app/env';

	export const hydrate = dev;
	export const router = browser;
	export const prerender = false;
</script>

<svelte:head>
	<title>contact</title>
</svelte:head>

<div class="content">
	<section id="contact" class="contact-section">
		<div class="contact-links">
			<a
				href="https://www.linkedin.com/in/tannerbleakley/"
				class="btn contact-details"
				target="_blank"
				rel="noreferrer"
				><i class="fab fa-linkedin">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						><path
							d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
						/></svg
					>
				</i> LinkedIn</a
			>
			<a
				id="profile-link"
				href="https://github.com/tannerpace"
				target="_blank"
				class="btn contact-details"
				rel="noreferrer"
				><i class="fab fa-github"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						><path
							d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"
						/></svg
					></i
				> GitHub</a
			>
			<a href="mailto:tannerpace@gmail.com" class="btn contact-details"
				><i class="fas fa-at"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						><path
							d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"
						/></svg
					></i
				> Send an email</a
			>
			<a href="tel:8435139583" class="btn contact-details"
				><i class="fas fa-mobile-alt"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						><path
							d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.445 17.827c-3.684 1.684-9.401-9.43-5.8-11.308l1.053-.519 1.746 3.409-1.042.513c-1.095.587 1.185 5.04 2.305 4.497l1.032-.505 1.76 3.397-1.054.516z"
						/></svg
					></i
				>Call me!</a
			>
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

	.contact-details:hover {
		color: var(--color-secondary);
	}

	.contact-details:active {
		color: var(--color-secondary);
	}

	.contact-details:focus {
		outline: none;
	}

	.contact-details:hover {
		color: var(--color-secondary);
	}

	.btn {
		border: none;
		background-color: transparent;
		cursor: pointer;
		transition: color 0.2s ease-in-out;
	}

	.btn:hover {
		color: var(--color-secondary);
	}

	.btn:active {
		color: var(--color-secondary);
	}

	.btn:focus {
		outline: none;
	}

	.btn:hover {
		color: var(--color-secondary);
	}

	.contact-links {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
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
