<script lang="ts">
	import '../app.css';
    import Title from '../lib/Title.svelte';
	let { children } = $props();

	const pages = [
      { title: 'Home', href: '/' },
      { title: 'Benefits', href: '/benefits' },
      { title: 'Research', href: '/research' },
      { title: 'Blog', href: '/blog' },
    ];
</script>

<nav class="flex justify-between items-center p-4 shadow-md">
	<a class="text-lg" href="/">NJ BioMedizone</a>

	<div class="flex space-x-6">
	    {#each pages as page}
			<a href={page.href} class="text-gray-700 hover:text-blue-600 transition-colors duration-300">{page.title}</a>
		{/each}

		<span>Socials</span>
		<!-- https://discord.gg/kETexd2pEX, https://www.instagram.com/biomedizone_nj -->
	</div>
</nav>

<Title title="NJ BioMedizone" />

<div class="max-w-3xl mx-auto mb-4">
    {@render children()}
</div>

<footer class="p-4 text-center">
    <p>©2025 NJ BioMedizone</p>
</footer>
