<script>
    import { page } from "$app/state";

    import Text from "$lib/Text.svelte";
    import Title from "$lib/Title.svelte";
</script>

{#if page.error}
    <Title title="Error {page.status}" />

    <div class="flex content-center">
        <div class="max-w-3xl mx-auto mb-4 pl-4 pr-4 mt-4 w-max">
            <Text>{page.error.message}</Text>
        </div>
    </div>
{/if}
