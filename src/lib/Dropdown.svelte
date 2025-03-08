<script lang="ts">
  let { outer, inner } = $props();
</script>

<div class="outer">
    {@render outer()}

    <div class="inner hidden absolute z-1 bg-white rounded-lg p-4 shadow-lg">
        {@render inner()}
    </div>
</div>

<style>
.outer:hover .inner {
    display: block;
}
</style>
