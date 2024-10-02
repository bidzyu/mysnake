import { combineReducers, configureStore } from '@reduxjs/toolkit';
import snake from './slices/snake/snakeSlice';
import status from './slices/status/statusSlice';
import grid from './slices/grid/gridSlice';
import score from './slices/score/scoreSlice';

const rootReducer = combineReducers({
  snake,
  status,
  grid,
  score,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
