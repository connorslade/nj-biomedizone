<script lang="ts">
  import Dropdown from "./Dropdown.svelte";

  let { name, href, links } = $props();
</script>

<Dropdown>
    {#snippet outer()}
        {#if href}
            <a href={href} class="text-gray-700 hover:text-blue-600 transition-colors duration-300">{name}</a>
        {:else}
            <span class="text-gray-700">{name}</span>
        {/if}
    {/snippet}

    {#snippet inner()}
        <div class="flex flex-col space-y-2">
            {#each links as page}
                <a
                    href={page.href}
                    rel="noopener noreferrer"
                    target={page.new ? "_blank" : "_self"}
                    class="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                    <div class="flex items-baseline gap-2">
                        {#if 'icon' in page}
                            {@const Icon = page.icon}
                            <Icon size={16} class="transform translate-y-1" />
                        {/if}
                        {page.name}
                    </div>
                </a>
            {/each}
        </div>
    {/snippet}
</Dropdown>
