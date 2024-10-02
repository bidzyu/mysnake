import React from 'react';
import { CellProps } from '../../redux/slices/grid/gridTypes';

export const Cell: React.FC<CellProps> = ({ type }) => {
  const cellClass = type ? 'cell__obstacle' : 'cell__empty';

  return <div className={'cell ' + cellClass}></div>;
};
