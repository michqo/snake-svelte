import { HEIGHT, WIDTH } from './constants';
import type { Pos } from './types';

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomPos(): Pos {
  return { x: getRandomInt(0, WIDTH - 1), y: getRandomInt(0, HEIGHT - 1) };
}

export { getRandomInt, getRandomPos };
