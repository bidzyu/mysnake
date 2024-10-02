import React from 'react';
import { Cell } from '../Cell';

interface MapGridProps {
  virtualGrid: number[][];
  gridSize: number;
  name: string;
  mul: number;
  selected: boolean;
  onClick: () => void;
}

export const MapGrid: React.FC<MapGridProps> = ({
  virtualGrid,
  gridSize,
  name,
  mul,
  selected,
  onClick,
}) => {
  const style = {
    '--grid-size': gridSize,
  } as React.CSSProperties;

  return (
    <div className="map" onClick={onClick}>
      <div className="map__grid-info">
        <span className="name">{name}</span>
        <span className="mul">Multiplier x{mul}</span>
      </div>
      <div
        className={selected ? 'map__grid selected' : 'map__grid'}
        style={style}
      >
        {virtualGrid.map((row, y) =>
          row.map((i, x) => <Cell x={x} y={y} key={`${x}-${y}`} type={i} />)
        )}
      </div>
    </div>
  );
};
