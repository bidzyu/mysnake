import { CellProps } from '../grid/gridTypes';

export interface SnakeState {
  items: SnakeTileType[];
  food: SnakeTileType[];
}

export interface SnakeTileType {
  x: number;
  y: number;
}

export interface AddNewFood {
  eatenFood: SnakeTileType;
  newFood: SnakeTileType | null;
}

export interface CharsInfo {
  snake: CellProps[];
  food: CellProps[];
}
