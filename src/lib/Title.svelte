<script lang="ts">
    let { title } = $props();
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class="pt-16 pb-16 sm:pt-32 sm:pb-32 bg-cover bg-center bg-image">
    <h1 class="text-4xl sm:text-5xl font-bold text-center text-white">
        {title}
    </h1>
</div>

<style>
    .bg-image {
        background-image: url("/title-background.png");
    }
</style>
