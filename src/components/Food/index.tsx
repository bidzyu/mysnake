import React from 'react';
import { useSelector } from 'react-redux';
import { Tile } from '..';
import { RootState } from '../../redux/store';

export const Food: React.FC = () => {
  const food = useSelector((state: RootState) => state.snake.food);

  return (
    <>
      {food.map((i) => (
        <Tile type="food" tile={i} key={`${i.x}-${i.y}`} />
      ))}
    </>
  );
};
