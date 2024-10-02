import { SnakeTileType } from '../../redux/slices/snake/snakeTypes';

export const getCanBeEatenFood = (
  head: SnakeTileType,
  foodlist: SnakeTileType[]
) => {
  return (
    foodlist.find((food) => food.x === head.x && food.y === head.y) || null
  );
};
