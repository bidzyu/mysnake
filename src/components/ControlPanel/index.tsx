import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { charsInit } from '../../redux/slices/snake/snakeSlice';
import { statusInit } from '../../redux/slices/status/statusSlice';
import { getNewFoodItem } from '../../utils';
import {
  resetCurrScore,
  setLevel,
  setScoreList,
} from '../../redux/slices/score/scoreSlice';
import { CellProps } from '../../redux/slices/grid/gridTypes';
import { CharsInfo } from '../../redux/slices/snake/snakeTypes';
import { ScoreListItem } from '../../redux/slices/score/scoreTypes';
import { Maps } from '..';

type ControlPanelProps = {
  firstRender: { current: boolean };
  setFalse: () => void;
};

export const ControlPanel: React.FC<ControlPanelProps> = ({
  firstRender,
  setFalse,
}) => {
  const { gridSize, obstacles } = useSelector((state: RootState) => state.grid);
  const { scoreList, level } = useSelector((state: RootState) => state.score);

  const [showScore, setShowScore] = React.useState(false);
  const [inputLevel, setInputLevel] = React.useState<number>(level);
  const [showMaps, setShowMaps] = React.useState(false);

  const dispatch = useDispatch();

  const playClickHanlder = () => {
    const snake: CellProps = {
      x: 3,
      y: 3,
    };
    const food: CellProps = getNewFoodItem([snake], [], obstacles, gridSize);

    const charsInfo: CharsInfo = {
      snake: [snake],
      food: [food],
    };

    dispatch(setLevel(inputLevel));
    dispatch(resetCurrScore());
    dispatch(charsInit(charsInfo));
    dispatch(statusInit());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputLevel(Number(e.target.value));
  };

  React.useEffect(() => {
    if (!firstRender.current) {
      const json = JSON.stringify(scoreList.slice(0, 15));
      localStorage.setItem('snake__score', json);
    } else {
      const json = localStorage.getItem('snake__score');

      if (json) {
        const localScoreList: ScoreListItem[] = JSON.parse(json);
        dispatch(setScoreList(localScoreList));
      }

      setFalse();
    }
  }, [scoreList]);

  const style = {
    '--mul-value': inputLevel,
    '--mul-value-2': inputLevel > 5 ? 1 : 10,
  } as React.CSSProperties;

  return (
    <>
      {showMaps && (
        <Maps gridSize={gridSize} close={() => setShowMaps(false)} />
      )}
      <div className="control-panel-wrapper">
        {showScore && (
          <div className="control-panel-wrapper__score">
            <div>Score:</div>
            <ul>
              {scoreList.map(({ score, date }) => (
                <li key={date}>
                  {score} <span className="date">({date})</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="control-panel">
          <div>Choose level</div>
          <div className="control-panel__lvl-value" style={style}>
            {inputLevel}
          </div>
          <input
            type="range"
            onChange={handleChange}
            value={inputLevel}
            min={1}
            max={10}
          />
          <button onClick={() => setShowScore(!showScore)}>
            {showScore ? 'Hide score' : 'Show score'}
          </button>
          <button onClick={() => setShowMaps(true)}>Select map</button>
          <button onClick={playClickHanlder}>Play</button>
        </div>
      </div>
    </>
  );
};
