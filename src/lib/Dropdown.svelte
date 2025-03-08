<script lang="ts">
  let { outer, inner } = $props();
</script>

<div class="outer">
    {@render outer()}

    <div class="inner opacity-0 absolute z-1 bg-white rounded-lg p-4 shadow-lg transition-transform duration-300">
        {@render inner()}
    </div>
</div>

<style>
.inner {
    transform: translateY(-2.5px);
    transition: transform 0.5s ease-out;
}

.outer:hover .inner {
    transform: translateY(0);
    opacity: 1;
}
</style>
