import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  fillVirtualGrid,
  fillVirtualGrid2,
  fillVirtualGrid3,
  fillVirtualGrid4,
} from '../../../utils';
import { GridState } from './gridTypes';

const DEFAULT_GRID_SIZE_VALUE = 25;

const { grid, obstacles } = fillVirtualGrid(DEFAULT_GRID_SIZE_VALUE);

const initialState: GridState = {
  currMapId: 1,
  gridSize: DEFAULT_GRID_SIZE_VALUE,
  virtualGrid: grid,
  obstacles: obstacles,
};

const gridSlice = createSlice({
  name: 'grid',
  initialState,
  reducers: {
    setGameMap(state, { payload }: PayloadAction<number>) {
      switch (payload) {
        case 1:
          const vg1 = fillVirtualGrid(DEFAULT_GRID_SIZE_VALUE);
          state.currMapId = 1;
          state.virtualGrid = vg1.grid;
          state.obstacles = vg1.obstacles;
          break;
        case 2:
          const vg2 = fillVirtualGrid2(DEFAULT_GRID_SIZE_VALUE);
          state.currMapId = 2;
          state.virtualGrid = vg2.grid;
          state.obstacles = vg2.obstacles;
          break;
        case 3:
          const vg3 = fillVirtualGrid3(DEFAULT_GRID_SIZE_VALUE);
          state.currMapId = 3;
          state.virtualGrid = vg3.grid;
          state.obstacles = vg3.obstacles;
          break;
        case 4:
          const vg4 = fillVirtualGrid4(DEFAULT_GRID_SIZE_VALUE);
          state.currMapId = 4;
          state.virtualGrid = vg4.grid;
          state.obstacles = vg4.obstacles;
          break;
      }
    },
  },
});

export default gridSlice.reducer;
export const { setGameMap } = gridSlice.actions;
