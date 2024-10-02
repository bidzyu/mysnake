import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tile } from '..';
import { RootState } from '../../redux/store';
import {
  changeDirection,
  toggleGame,
} from '../../redux/slices/status/statusSlice';
import { DirectionTypes } from '../../redux/slices/status/statusTypes';
import { addKeyEventListener } from '../../utils';
import { addCurrScoreToList } from '../../redux/slices/score/scoreSlice';

export const Snake: React.FC = () => {
  const snake = useSelector((state: RootState) => state.snake.items);
  const direction = useSelector((state: RootState) => state.status.direction);
  const isAlive = useSelector((state: RootState) => state.status.isAlive);
  const isGameStarted = useSelector(
    (state: RootState) => state.status.isGameStarted
  );
  const currScore = useSelector((state: RootState) => state.score.currScore);

  const dispatch = useDispatch();

  function setNewDirection(newDir: DirectionTypes) {
    dispatch(changeDirection(newDir));
  }

  useEffect(() => {
    if (!isAlive && isGameStarted) {
      if (currScore > 0) {
        const d = new Date();
        const date = d.toLocaleString();

        dispatch(addCurrScoreToList(date));
      }
      dispatch(toggleGame(false));
    }
  }, [isAlive]);

  useEffect(() => {
    if (isAlive) {
      const keyHandler: Function = addKeyEventListener(
        direction,
        setNewDirection
      ) as Function;

      return () => keyHandler();
    }
  }, [snake]);

  return (
    <>
      {snake.map((i, n) => {
        const type = n ? 'snake' : 'head';

        return (
          <Tile
            type={type}
            tile={i}
            key={`${i.x}-${i.y}`}
            direction={direction}
            isAlive={isAlive}
          />
        );
      })}
    </>
  );
};
