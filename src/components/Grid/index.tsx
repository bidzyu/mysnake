import React from 'react';
import { useSelector } from 'react-redux';
import { Cell, Snake, Food } from '..';
import { RootState } from '../../redux/store';

export const Grid: React.FC = React.memo(() => {
  const { virtualGrid, gridSize } = useSelector(
    (state: RootState) => state.grid
  );

  const style = {
    '--grid-size': gridSize,
  } as React.CSSProperties;

  return (
    <div className="grid" style={style}>
      {virtualGrid.map((row, y) =>
        row.map((i, x) => <Cell x={x} y={y} key={`${x}-${y}`} type={i} />)
      )}
      <Snake />
      <Food />
    </div>
  );
});
