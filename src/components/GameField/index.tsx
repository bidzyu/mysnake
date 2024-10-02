import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, GameController, ControlPanel, Score } from '..';
import { RootState } from '../../redux/store';

export const GameField: React.FC = React.memo(() => {
  const isGameStarted = useSelector(
    (state: RootState) => state.status.isGameStarted
  );

  const firstRender = React.useRef(true);

  const setFalse = () => {
    firstRender.current = false;
  };

  return (
    <div className="game-field">
      <Score />
      <Grid />
      {isGameStarted ? (
        <GameController />
      ) : (
        <ControlPanel firstRender={firstRender} setFalse={setFalse} />
      )}
    </div>
  );
});
