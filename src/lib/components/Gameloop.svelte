<script lang="ts">
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  import { HEIGHT, WIDTH } from '../utils/constants';
  import { food, gameover, playing, snake } from '../utils/stores';
  import type { Pos } from '../utils/types';

  let direction: 'up' | 'down' | 'left' | 'right' = 'right';
  let id: number;

  onMount(() => {
    const funcRef = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'a':
          if (direction == 'right') break;
          direction = 'left';
          break;
        case 'd':
          if (direction == 'left') break;
          direction = 'right';
          break;
        case 'w':
          if (direction == 'down') break;
          direction = 'up';
          break;
        case 's':
          if (direction == 'up') break;
          direction = 'down';
          break;
        case ' ':
          playing.update((p) => !p);
          break;
        default:
          break;
      }
    };
    document.addEventListener('keydown', funcRef);
    playing.subscribe((p) => {
      if (p) {
        id = setInterval(loop, 300);
      } else {
        clearInterval(id);
      }
    });

    return () => {
      document.removeEventListener('keydown', funcRef);
      clearInterval(id);
    };
  });

  function checkCollisions() {
    const snakeClone = get(snake);
    let headPos = snakeClone[snakeClone.length - 1];
    const foodPos = get(food);
    const foodCollision = headPos.x == foodPos.x && headPos.y == foodPos.y;
    const wallCollision =
      headPos.x > WIDTH - 1 ||
      headPos.x < 0 ||
      headPos.y > HEIGHT - 1 ||
      headPos.y < 0;
    if (wallCollision) {
      playing.set(false);
      gameover.set(true);
    }
  }

  function moveSnake() {
    const snakeClone = get(snake);
    let head = { ...snakeClone[snakeClone.length - 1] };
    switch (direction) {
      case 'left':
        head.x -= 1;
        break;
      case 'right':
        head.x += 1;
        break;
      case 'up':
        head.y -= 1;
        break;
      case 'down':
        head.y += 1;
        break;
      default:
        break;
    }

    // Shift snake parts
    snake.update((s) => {
      s.push(head);
      s.shift();
      return s;
    });
  }

  function loop() {
    moveSnake();
    checkCollisions();
  }
</script>
