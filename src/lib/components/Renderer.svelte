<script lang="ts">
  import { HEIGHT, WIDTH } from '../utils/constants';
  import { food, snake } from '../utils/stores';

  function isFoodSquare(x: number, y: number): boolean {
    return $food.x == x && $food.y == y;
  }

  function isSnakeSquare(x: number, y: number): boolean {
    for (const square of $snake) {
      if (square.x == x && square.y == y) {
        return true;
      }
    }
    return false;
  }
</script>

{#key $snake}
  {#each Array(HEIGHT) as _, x}
    <div class="column">
      {#each Array(WIDTH) as _, y}
        {@const food = isFoodSquare(x, y)}
        {@const snake = isSnakeSquare(x, y)}
        <div class="square" class:food class:snake></div>
      {/each}
    </div>
  {/each}
{/key}
