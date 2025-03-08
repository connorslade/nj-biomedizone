<script lang="ts">
    let { title } = $props();

    let id = title.toLowerCase().replace(/\s/g, "-");
</script>

<h2 class="text-4xl font-light mt-4 mb-4" {id}>{title}</h2>
