<script lang="ts">
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  import { snake } from '../utils/stores';
  import type { Pos } from '../utils/types';

  let direction: 'up' | 'down' | 'left' | 'right' = 'right';

  onMount(() => {
    const funcRef = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'a':
          direction = 'left';
          break;
        case 'd':
          direction = 'right';
          break;
        case 'w':
          direction = 'up';
          break;
        case 's':
          direction = 'down';
          break;
        case ' ':
          clearInterval(id);
          break;
        default:
          break;
      }
    };
    const id = setInterval(loop, 300);
    document.addEventListener('keydown', funcRef);

    return () => {
      document.removeEventListener('keydown', funcRef);
    };
  });

  function loop() {
    const snakeClone = get(snake);
    const head = snakeClone[snakeClone.length - 1];

    let newHead: Pos;

    switch (direction) {
      case 'left':
        newHead = { x: head.x - 1, y: head.y };
        break;
      case 'right':
        newHead = { x: head.x + 1, y: head.y };
        break;
      case 'up':
        newHead = { x: head.x, y: head.y - 1 };
        break;
      case 'down':
        newHead = { x: head.x, y: head.y + 1 };
        break;
      default:
        break;
    }

    // Shift snake parts
    snake.update((s) => {
      s.push(newHead);
      s.shift();
      return s;
    });
  }
</script>
