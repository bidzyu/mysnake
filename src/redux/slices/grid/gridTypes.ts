import { SnakeTileType } from '../snake/snakeTypes';

export interface GridState {
  currMapId: number;
  gridSize: number;
  virtualGrid: number[][];
  obstacles: SnakeTileType[];
}

export interface CellProps {
  x: number;
  y: number;
  type?: number;
}
