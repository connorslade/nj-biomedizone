<script lang="ts">
    import Subtitle from "$lib/Subtitle.svelte";
    import Text from "$lib/Text.svelte";

    let { articles } = $props();
</script>

<Subtitle title="Blog" />

<div class="mt-6">
    <div class="space-y-4">
        {#each articles as article, i}
            <div
                class="border-gray-200 pb-4 cursor-pointer"
                class:border-b={i !== articles.length - 1}
            >
                <a href={`/blog/${article.slug}`}>
                    <div class="flex items-baseline justify-between gap-2">
                        <h3 class="text-xl font-semibold">{article.title}</h3>
                        <p class="text-sm text-gray-500">{article.published}</p>
                    </div>
                    <Text class="text-sm">{article.brief}</Text>
                </a>
            </div>
        {/each}
    </div>
</div>
