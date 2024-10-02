import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SnakeState, SnakeTileType, AddNewFood, CharsInfo } from './snakeTypes';

const initialState: SnakeState = {
  items: [],
  food: [],
};

const snakeSlice = createSlice({
  name: 'snake',
  initialState,
  reducers: {
    snakeMove(store, { payload }: PayloadAction<SnakeTileType[]>) {
      store.items = payload;
    },
    foodEatAndAdd(store, { payload }: PayloadAction<AddNewFood>) {
      store.food = store.food.filter(
        (f) => f.x !== payload.eatenFood.x && f.y !== payload.eatenFood.y
      );
      store.items.unshift(payload.eatenFood);

      if (payload.newFood) {
        store.food.push(payload.newFood);
      }
    },
    charsInit(store, { payload }: PayloadAction<CharsInfo>) {
      store.items = payload.snake;
      store.food = payload.food;
    },
  },
});

export default snakeSlice.reducer;
export const { snakeMove, foodEatAndAdd, charsInit } = snakeSlice.actions;
