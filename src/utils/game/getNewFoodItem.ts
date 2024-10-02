import { SnakeTileType } from '../../redux/slices/snake/snakeTypes';

export const getNewFoodItem = (
  snake: SnakeTileType[],
  food: SnakeTileType[],
  obstacles: SnakeTileType[],
  gridSize: number
) => {
  let newFoodItem: SnakeTileType | null = null;

  do {
    newFoodItem = {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize),
    };
  } while (
    snake.find((i) => i.x === newFoodItem?.x && i.y === newFoodItem?.y) ||
    food.find((i) => i.x === newFoodItem?.x && i.y === newFoodItem?.y) ||
    obstacles.find((i) => i.x === newFoodItem?.x && i.y === newFoodItem?.y)
  );

  return newFoodItem;
};
