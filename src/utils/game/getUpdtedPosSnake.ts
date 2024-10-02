import { SnakeTileType } from '../../redux/slices/snake/snakeTypes';

export function getUpdtedPosSnake(
  snake: SnakeTileType[],
  newCoords: SnakeTileType
) {
  const newSnake = [];

  const lastItem = snake.length - 1;

  for (let i = lastItem; i >= 0; i--) {
    if (i === 0) {
      const head = {
        x: newCoords.x,
        y: newCoords.y,
      };

      newSnake.push(head);
    } else {
      const snNext = snake[i - 1];

      newSnake.push(snNext);
    }
  }

  return newSnake.reverse();
}
