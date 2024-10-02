import { SnakeTileType } from '../../redux/slices/snake/snakeTypes';

export function isOnField(head: SnakeTileType, gridSize: number) {
  const { x, y } = head;

  if (x < 0 || y < 0 || x >= gridSize || y >= gridSize) return false;

  return true;
}
