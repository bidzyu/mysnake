import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DirectionTypes, StatusState } from './statusTypes';

const initialState: StatusState = {
  direction: DirectionTypes.Right,
  isGameStarted: false,
  isAlive: false,
  controllerId: 0,
};

const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    changeDirection(state, { payload }: PayloadAction<DirectionTypes>) {
      state.direction = payload;
    },
    controllerIdIncrease(state) {
      state.controllerId++;
    },
    toggleGame(state, { payload }: PayloadAction<boolean>) {
      state.isGameStarted = payload;
    },
    toggleAlive(state, { payload }: PayloadAction<boolean>) {
      state.isAlive = payload;
    },
    statusInit(state) {
      state.isAlive = true;
      state.isGameStarted = true;
      state.controllerId = 0;
      state.direction = DirectionTypes.Right;
    },
  },
});

export default statusSlice.reducer;
export const {
  changeDirection,
  controllerIdIncrease,
  toggleGame,
  toggleAlive,
  statusInit,
} = statusSlice.actions;
