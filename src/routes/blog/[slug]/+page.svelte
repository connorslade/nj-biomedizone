<script lang="ts">
    import SvelteMarkdown from "svelte-markdown";
    import { Book, Calendar } from "@lucide/svelte";
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props();
</script>

<div class="flex mt-6 gap-2 justify-center">
    <span class="flex gap-1 items-baseline"
        ><Calendar size={16} class="translate-y-0.5" />
        {new Date(data.published).toLocaleString()}</span
    >
    &bull;
    <span class="flex gap-1 items-baseline"
        ><Book size={16} class="translate-y-0.5" />
        {data.readTimeInMinutes} min read</span
    >
</div>

<article class="rendered">
    <SvelteMarkdown source={data.markdown} />
</article>

<style>
</style>
