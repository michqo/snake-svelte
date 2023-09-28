import { writable, type Writable } from 'svelte/store';
import type { Pos } from './types';

const direction: Writable<'up' | 'down' | 'left' | 'right'> = writable('right');
const food: Writable<Pos | undefined> = writable();
const snake: Writable<Pos[] | undefined> = writable();
const score = writable(0);
const playing = writable(false);
const gameover = writable(false);

export { direction, food, snake, score, playing, gameover };
