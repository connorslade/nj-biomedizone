<script lang="ts">
  let { children, class : klass } = $props();
</script>

<p class="text-justify {klass}">
    {@render children()}
</p>
