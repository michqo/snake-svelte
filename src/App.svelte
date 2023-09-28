<script lang="ts">
  import { onMount } from 'svelte';
  import Gameloop from './lib/components/Gameloop.svelte';
  import Github from './lib/components/Github.svelte';
  import Renderer from './lib/components/Renderer.svelte';
  import Buttons from './lib/components/Buttons.svelte';
  import { WIDTH } from './lib/utils/constants';
  import { getRandomPos } from './lib/utils/helper';
  import {
    direction,
    food,
    gameover,
    playing,
    score,
    snake,
  } from './lib/utils/stores';

  function setRandomPos() {
    $food = getRandomPos();
    $snake = [getRandomPos()];
    const head = $snake[0];
    if (head.x > WIDTH / 2) {
      $direction = 'left';
    } else {
      $direction = 'right';
    }
  }

  function startGame() {
    $playing = true;
    $gameover = false;
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
    <div class="title">
      <a href="https://github.com/michqo/snake-svelte" target="_blank"
        ><Github class="github" /></a
      >
      <h1>Snek</h1>
    </div>

    {#if $gameover}
      <p class="gameover">You lost</p>
    {/if}
    <p>Press <kbd>space</kbd> to start the game</p>
    <p>Use <kbd>wasd</kbd> or the buttons below to control your snake</p>
    <p class="score">{$score}</p>
  </div>
  {#if !$playing}
    <button on:click={startGame}>Start game</button>
  {/if}
  <Buttons />
  {#if $food && $snake}
    <div class="map">
      <Renderer />
      <Gameloop />
    </div>
  {/if}
</main>
