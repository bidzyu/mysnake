import { SnakeTileType } from '../../redux/slices/snake/snakeTypes';

export const checkIsObstacle = (
  snakeHead: SnakeTileType,
  obstacles: SnakeTileType[]
) => obstacles.some((obs) => obs.x === snakeHead.x && obs.y === snakeHead.y);
