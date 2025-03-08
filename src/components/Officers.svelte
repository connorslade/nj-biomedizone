<script>
    import officers from "../assets/officers.json";
    import Subtitle from "../lib/Subtitle.svelte";
</script>

<Subtitle title="Meet the Team" />

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    {#each officers as officer}
        <div
            class="bg-white shadow-md rounded-lg overflow-hidden flex items-center p-4"
        >
            <img
                src={officer.image}
                alt={officer.name}
                class="w-16 h-16 object-cover rounded-full mr-4"
            />
            <div>
                <p class="text-lg font-semibold">{officer.name}</p>
                <p class="text-gray-600">{officer.role}</p>
            </div>
        </div>
    {/each}
</div>
