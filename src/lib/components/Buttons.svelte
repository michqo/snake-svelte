<script lang="ts">
  import { direction } from '../utils/stores';

  function left() {
    if ($direction != 'right') {
      $direction = 'left';
    }
  }
  function right() {
    if ($direction != 'left') {
      $direction = 'right';
    }
  }
  function up() {
    if ($direction != 'down') {
      $direction = 'up';
    }
  }
  function down() {
    if ($direction != 'up') {
      $direction = 'down';
    }
  }
</script>

<div class="buttons">
  <div class="center">
    <button on:click={up}>up</button>
  </div>
  <div class="between">
    <button on:click={left}>left</button>
    <button on:click={right}>right</button>
  </div>
  <div class="center">
    <button on:click={down}>down</button>
  </div>
</div>
