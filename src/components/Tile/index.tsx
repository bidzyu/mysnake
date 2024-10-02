import React from 'react';
import { SnakeTileType } from '../../redux/slices/snake/snakeTypes';
import { DirectionTypes } from '../../redux/slices/status/statusTypes';
import classnames from 'classnames';

interface ITile {
  type: 'snake' | 'head' | 'food';
  tile: SnakeTileType;
  direction?: DirectionTypes;
  isAlive?: boolean;
}

export const Tile: React.FC<ITile> = ({ type, tile, direction, isAlive }) => {
  const tileTypeClassName = 'tile__' + type;

  const isSnake = type === 'snake' || type === 'head';

  const style = {
    '--x': tile.x,
    '--y': tile.y,
  } as React.CSSProperties;

  return (
    <div
      className={classnames(
        'tile',
        tileTypeClassName,
        isSnake && isAlive === false ? 'dead' : ''
      )}
      style={style}
    >
      {type === 'head' && (
        <div className={'face face__' + direction}>
          {isAlive ? '•⩊•' : '>⩊<'}
        </div>
      )}
    </div>
  );
};
