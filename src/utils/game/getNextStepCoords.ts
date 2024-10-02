import { DirectionTypes } from '../../redux/slices/status/statusTypes';
import { SnakeTileType } from '../../redux/slices/snake/snakeTypes';

export function getNextStepCoords(
  head: SnakeTileType,
  direction: DirectionTypes
) {
  if (direction === DirectionTypes.Right) {
    return { x: head.x + 1, y: head.y };
  }
  if (direction === DirectionTypes.Left) {
    return { x: head.x - 1, y: head.y };
  }
  if (direction === DirectionTypes.Top) {
    return { x: head.x, y: head.y - 1 };
  }
  if (direction === DirectionTypes.Bottom) {
    return { x: head.x, y: head.y + 1 };
  }
}
