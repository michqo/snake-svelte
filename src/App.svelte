<script lang="ts">
  import { onMount } from 'svelte';
  import Renderer from './lib/components/Renderer.svelte';
  import { food, snake } from './lib/utils/stores';
  import Gameloop from './lib/components/Gameloop.svelte';

  onMount(() => {
    $food = { x: 8, y: 4 };
    $snake = [
      { x: 1, y: 4 },
      { x: 2, y: 4 },
      { x: 3, y: 4 },
    ];
  });
</script>

<main>
  <h1>Snek</h1>
  <div class="map">
    {#if $food && $snake}
      <Renderer />
      <Gameloop />
    {/if}
  </div>
</main>
