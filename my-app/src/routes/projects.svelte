<script context="module">
	import { browser, dev } from '$app/env';

	export const hydrate = dev;

	export const router = browser;

	export const prerender = false;
</script>

<svelte:head>
	<title>Personal Projects</title>
</svelte:head>

<div class="content" />
<div>
	<section id="projects" class="projects-section">
		<h2 class="projects-section-header">Projects</h2>

		<div class="projects-grid">
			<a
				href="http://kitesurf.ninja"
				target="_blank"
				rel="noopener noreferrer"
				class="project project-tile"
			>
				<img class="project-image" src="kitesurfninja.png" alt="project" />
				<p class="project-title">
					<span class="code">&lt;</span>
					Kitesurf.ninja
					<span class="code">&#47;&gt;</span>
				</p>
			</a>

			<a
				href="https://tannerpace.github.io/crispy-couscous/"
				target="_blank"
				rel="noopener noreferrer"
				class="project project-tile"
			>
				<img class="project-image" src="svelte_typer.png" alt="project" />
				<p class="project-title">
					<span class="code">&lt;</span>
					Javascript-or-English-Typing-Test
					<span class="code">&#47;&gt;</span>
				</p>
			</a>

			<a
				href="https://tannerpace.github.io/Todo-React/"
				target="_blank"
				rel="noopener noreferrer"
				class="project project-tile"
			>
				<img class="project-image" src="svelte_todo.png" alt="project" />
				<p class="project-title">
					<span class="code">&lt;</span>
					Todo-App-Filter
					<span class="code">&#47;&gt;</span>
				</p>
			</a>
			<a
				href="https://tannerpace.github.io/MemeMaker/"
				target="_blank"
				rel="noopener noreferrer"
				class="project project-tile"
			>
				<img class="project-image" src="mememaker.png" alt="project" />
				<p class="project-title">
					<span class="code">&lt;</span>
					Meme-Maker-App
					<span class="code">&#47;&gt;</span>
				</p>
			</a>
			<a
				href="https://singlepage.d1zqi00jmrlymq.amplifyapp.com/#page-top"
				target="_blank"
				rel="noopener noreferrer"
				class="project project-tile"
			>
				<img class="project-image" src="air.png" alt="project" />
				<p class="project-title">
					<span class="code">&lt;</span>
					Airautonomo-Business-Page
					<span class="code">&#47;&gt;</span>
				</p>
			</a>
			<a
				href="https://main.d3ofdvrmegm1nc.amplifyapp.com/pages/shapley.html"
				class="project project-tile"
			>
				<img class="project-image" src="shaple.png" alt="project" />
				<p class="project-title">
					<span class="code">&lt;</span>
					Tribute-Page-To-Lloyd-Shapley
					<span class="code">&#47;&gt;</span>
				</p>
			</a>
			<a
				href="https://www.youtube.com/embed/HIsTgGAJVZ4"
				target="_blank"
				rel="noopener noreferrer"
				class="project project-tile"
			>
				<img
					class="project-image"
					src="Screen Shot 2021-09-25 at 2.25.22 PM.png "
					alt="project"
				/>
				<p class="project-title">
					<span class="code">&lt;</span>
					Full-Stack-Ecommerce-Parts-Store
					<span class="code">&#47;&gt;</span>
				</p>
			</a>
		</div>
	</section>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}

	*,
	*::before,
	*::after {
		box-sizing: inherit;
	}

	/* Base styles */

	.project-tile {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		padding: var(--column-padding);
		border-radius: 3rem;
		background-color: '#fafafa';
		box-shadow: var(--box-shadow);
		transition: var(--transition);
		box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.2);
		cursor: pointer;
	}
	h2 {
		font-family: 'Raleway', sans-serif;
		font-weight: 700;
		text-align: center;
	}

	h2 {
		font-size: 4.2rem;
	}

	a {
		text-decoration: none;
		color: var(--main-white);
	}

	img {
		display: block;
		width: 60%;
	}

	/* nav */

	/* Projects section */

	.projects-section {
		text-align: center;
		padding: 10rem 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.projects-section-header {
		max-width: 640px;
		margin: 0 auto 6rem auto;
		border-bottom: 0.2rem solid var(--main-white);
	}

	@media (max-width: 28.75em) {
		.projects-section-header {
			font-size: 4rem;
		}
	}

	@media (max-width: 30.625em) {
		.projects-section {
			padding: 6rem 1rem;
		}

		.projects-grid {
			grid-template-columns: 1fr;
		}
	}

	.project {
		background: var(--main-gray);
		box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
		border-radius: 2px;
	}

	.code {
		color: var(--main-gray);
		transition: color 0.3s ease-out;
	}

	.project:hover .code {
		color: #ff7f50;
	}

	.project-image {
		height: calc(100% - 6.8rem);
		width: 100%;
		object-fit: cover;
	}

	.project-title {
		font-size: 2rem;
		padding: 2rem 0.5rem;
	}

	@media (max-width: 30.625em) {
		.projects-section {
			padding: 6rem 1rem;
		}

		.projects-grid {
			grid-template-columns: 1fr;
		}
	}

	.project {
		background: var(--main-gray);
		box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
		border-radius: 2px;
	}

	.code {
		color: var(--main-gray);
		transition: color 0.3s ease-out;
	}

	.project:hover .code {
		color: #00ff9d;
	}

	.project-image {
		height: calc(100% - 6.8rem);
		width: 100%;
		object-fit: cover;
	}

	.project-title {
		font-size: 2rem;
		padding: 2rem 0.5rem;
	}

	img {
		width: 100%;
		max-width: 400px;
		height: auto;
		margin: auto;
		-webkit-mask-repeat-x: 300px;
	}
</style>
