import { SnakeTileType } from '../../redux/slices/snake/snakeTypes';

export const checkIsSnake = (
  snake: SnakeTileType[],
  cell: SnakeTileType
): boolean => {
  const noHeadSnake = snake.slice(1);

  return noHeadSnake.some((i) => i.x === cell.x && i.y === cell.y);
};
