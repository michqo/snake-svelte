<script lang="ts">
  import { onMount } from 'svelte';
  import Gameloop from './lib/components/Gameloop.svelte';
  import Renderer from './lib/components/Renderer.svelte';
  import { getRandomPos } from './lib/utils/helper';
  import { food, gameover, score, snake } from './lib/utils/stores';

  function setRandomPos() {
    $food = getRandomPos();
    $snake = [getRandomPos()];
  }

  onMount(() => {
    setRandomPos();
    gameover.subscribe((gameover) => {
      if (gameover) {
        setRandomPos();
        $score = 0;
      }
    });
  });
</script>

<main>
  <div class="header">
    <a href="https://github.com/michqo/snake-svelte" target="_blank"
      ><h1>Snek</h1></a
    >
    <p>Press <kbd>space</kbd> to start the game</p>
    <p class="score">{$score}</p>
  </div>
  <div class="map">
    {#if $food && $snake}
      <Renderer />
      <Gameloop />
    {/if}
  </div>
</main>
