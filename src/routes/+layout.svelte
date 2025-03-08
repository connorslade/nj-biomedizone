<script lang="ts">
	import '../app.css';
	import type { LayoutProps } from './$types';

	import Link from '$lib/Link.svelte';
    import NavDropdown from '../lib/NavDropdown.svelte';
    import Title from '../lib/Title.svelte';
	import { Instagram, MessageSquare } from '@lucide/svelte';
    import { page } from '$app/state';

	let { children, data }: LayoutProps = $props();

	const pages = [
      { title: 'Benefits', href: '/benefits' },
      { title: 'Research', href: '/research' },
      { title: 'Partnerships', href: '/partnerships' },
    ];
</script>

<nav class="flex flex-wrap justify-center sm:justify-between items-center p-4 shadow-md">
    <a class="text-lg mr-4" href="/">NJ BioMedizone</a>
	<div class="flex flex-wrap space-x-2 sm:space-x-4 justify-center">
	   <NavDropdown name="Home" href="/" links={[
			{ name: 'About Us', href: '/#about-us' },
			{ name: 'Meet the Team', href: '/#meet-the-team' },
			{ name: 'Blog', href: '/#blog' },
		]} />

		<NavDropdown name="Socials" href={null} links={[
         	{ name: 'Instagram', icon: Instagram, new: true, href: 'https://www.instagram.com/biomedizone_nj' },
         	{ name: 'Discord', icon: MessageSquare, new: true, href: 'https://discord.gg/kETexd2pEX' }
        ]} />

	    {#each pages as page}
			<a href={page.href} class="text-gray-700 hover:text-blue-600 transition-colors duration-300">{page.title}</a>
		{/each}
	</div>
</nav>

<Title title={page.data.title} />

<div class="max-w-3xl mx-auto mb-4 pl-4 pr-4">
    {@render children()}
</div>

<footer class="p-4 mb-4 text-center border-t border-gray-200">
    <p>©2025 NJ BioMedizone</p>
    <p>Website by <Link href="https://connorcode.com">Connor Slade</Link></p>
</footer>
