<script>
	import Nested from './Nested.svelte';
	let name = 'Lee';
	let src = 'https://svelte.dev/tutorial/image.gif';
	let string = `this string contains some <strong>hihi</strong>`;// {@html}은 html 그대로 출력해줌
</script>

<main>
	<h1>Hell {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<img {src} alt="A img">
	<p>haha {@html string}</p>
	<Nested />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	p {
		color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>