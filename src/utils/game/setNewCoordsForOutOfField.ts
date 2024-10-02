import { SnakeTileType } from '../../redux/slices/snake/snakeTypes';

export const setNewCoordsForOutOfField = (
  coords: SnakeTileType,
  gridSize: number
) => {
  const { x, y } = coords;

  const newCoords: SnakeTileType = {
    ...coords,
  };

  if (x < 0) {
    newCoords.x = gridSize - 1;
  } else if (x >= gridSize) {
    newCoords.x = 0;
  } else if (y < 0) {
    newCoords.y = gridSize - 1;
  } else if (y >= gridSize) {
    newCoords.y = 0;
  }

  return newCoords;
};
