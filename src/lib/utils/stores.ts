import { writable, type Writable } from 'svelte/store';
import type { Pos } from './types';

const food: Writable<Pos | undefined> = writable();
const snake: Writable<Pos[] | undefined> = writable();
const score = writable(0);

export { food, snake, score };
