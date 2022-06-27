<script context="module">
	import About from './about.svelte';

	import { browser, dev } from '$app/env';

	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;

	export const meta = {
		title: 'Tanner Bleakley',
		description: "Tanner Bleakley's personal website",

		url: 'https://tannerbleakley.com/about',
		type: 'article'
	};
</script>

<div
	class="article"
	data-meta="meta"
	data-hydrate="hydrate"
	data-router="router"
	data-prerender="prerender"
>
	<section class="about">
		<div class="paragraph head-paragraph">
			When I think about the starting point of my fascination with technology
			and computers, I would have to dedicate that title to the time my mom
			brought up an early IBM. She taught me enough commands to explore the file
			system and, from that moment, I was hooked. As I grew up, I never lost
			that drive to solve technological problems, and I also developed a passion
			for helping others by offering applicable solutions to their tech-based
			issues. I carried these interests into my career, and I am now a dedicated
			and passionate full-stack developer.
		</div>

		<div class="paragraph">
			From front-end to data base, I am well-versed in bringing anyone’s tech or
			web design vision to life. Inspired by influential individuals in the
			technology community, such as George Hotz and even Quincy Larson, I am
			adamant about staying updated on today’s best practices, innovations, and
			trends in the industry. As someone who once aspired to become a teacher, I
			enjoy taking the time to fully and transparently explain my process,
			solutions, and outcomes to clients.
		</div>
		<div class="paragraph">
			In 2007, I graduated from the College of Charleston, where I earned a
			Bachelor of Science degree. As someone who enjoys a good adventure, I am
			open to remote jobs as well as opportunities to completely relocate if
			needed. As I am interested in and compassionate towards other cultures, I
			would consider it an honor to work in an area I’ve never lived in before.
			For the full scope of my full-stack development skills and abilities, I
			invite you to check out my <a href="resume">resume!</a>
		</div>
		<div class="paragraph">
			When I am away from the office, I enjoy kitesurfing, flying drones, and
			filming these adventures for my
			<a href="https://www.youtube.com/user/pacetanner/playlists"
				>YouTube channel.</a
			>. Notably, I’m currently developing a platform called
			<a href="kitesurf.ninja"> KiteSurfing Ninja,</a>
			which will be a free tool to further connect the kitesurfing community. In
			my spare time, I can often be found furthering the growth of my small photography
			and drone videography business,
			<a href="airautonomo.com"> Airautonomo.</a> Even when I am not working, I
			am consistently researching the field to ensure I provide my clients and
			employers with the most current full-stack developer technology solutions.<br
				class="paragraph"
			/>
			<div class="paragraph">
				Would you like to know more about my expertise and interests? Please
				feel free to Contact Me any time to chat! "
			</div>
		</div>
		<img src="about.png" alt="Tanner Bleakley" class="about-image" />
	</section>
</div>

<style>
	.about {
		font-size: 1.5rem;
		font-weight: 300;
		line-height: 1.5;
		margin-bottom: 1rem;
	}

	.paragraph {
		display: block;
		margin-top: 1rem;
		margin-bottom: 1rem;
		text-indent: 2rem;
		text-align: justify;
	}
	.head-paragraph {
		margin-top: 5rem;
		color: black;
	}

	.about-image {
		width: 100%;
		height: auto;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}
	.article {
		margin-top: 1rem;
		margin-bottom: 1rem;
	}
</style>
