<script lang="ts">
    let { children, href } = $props();
</script>

<a class="text-blue-600 hover:underline" {href} target="_blank" rel="noopener noreferrer">
    {@render children()}
</a>
