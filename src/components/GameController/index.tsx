import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { snakeMove, foodEatAndAdd } from '../../redux/slices/snake/snakeSlice';
import {
  controllerIdIncrease,
  toggleAlive,
  toggleGame,
} from '../../redux/slices/status/statusSlice';
import {
  getUpdtedPosSnake,
  getNextStepCoords,
  isOnField,
  getCanBeEatenFood,
  getNewFoodItem,
  checkIsSnake,
  setNewCoordsForOutOfField,
  checkIsObstacle,
} from '../../utils';
import {
  increaseCurrScore,
  increaseCurrScoreBy,
} from '../../redux/slices/score/scoreSlice';
import { useWithSound } from '../../utils/hooks/useWithSound';
import { point, gameover, victory } from '../../assets/sounds';

export const GameController: React.FC = () => {
  const { gridSize, obstacles } = useSelector((state: RootState) => state.grid);
  const { direction, controllerId } = useSelector(
    (state: RootState) => state.status
  );
  const level = useSelector((state: RootState) => state.score.level);
  const { food, items: snake } = useSelector((state: RootState) => state.snake);

  const pointSound = useWithSound(point);
  const gameoverSound = useWithSound(gameover);
  const victorySound = useWithSound(victory);

  const snakeSpeed = Math.floor(750 / level);
  const totalCells = gridSize * gridSize;
  const head = snake[0];

  const dispatch = useDispatch();

  React.useEffect(() => {
    let newCoords = getNextStepCoords(head, direction);
    if (!newCoords) return;

    if (!isOnField(newCoords, gridSize)) {
      newCoords = setNewCoordsForOutOfField(newCoords, gridSize);
    }

    const isSnake = checkIsSnake(snake, newCoords);
    const isObstacle = checkIsObstacle(newCoords, obstacles);

    if (isSnake || isObstacle) {
      gameoverSound.playSound();
      dispatch(toggleAlive(false));
      return;
    }

    const eatenFood = getCanBeEatenFood(newCoords, food);

    if (eatenFood) {
      pointSound.playSound();
      dispatch(increaseCurrScore());

      if (snake.length < totalCells - obstacles.length) {
        const newFood = getNewFoodItem(snake, food, obstacles, gridSize);
        dispatch(foodEatAndAdd({ eatenFood, newFood }));
      } else {
        victorySound.playSound();
        dispatch(foodEatAndAdd({ eatenFood, newFood: null }));
        dispatch(increaseCurrScoreBy(gridSize * 2));
        dispatch(toggleGame(false));
        return;
      }
    } else {
      const newSnake = getUpdtedPosSnake(snake, newCoords);

      dispatch(snakeMove(newSnake));
    }

    setTimeout(() => dispatch(controllerIdIncrease()), snakeSpeed);
  }, [controllerId]);

  return <></>;
};
