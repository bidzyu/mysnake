import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScoreListItem, ScoreState } from './scoreTypes';

const initialState: ScoreState = {
  scoreList: [],
  currScore: 0,
  level: 5,
  mul: 1,
};

const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    setScoreList(state, { payload }: PayloadAction<ScoreListItem[]>) {
      state.scoreList = payload.slice(0, 15);
    },
    setLevel(state, { payload }: PayloadAction<number>) {
      state.level = payload;
    },
    resetCurrScore(state) {
      state.currScore = 0;
    },
    increaseCurrScore(state) {
      state.currScore += 1 * state.level * state.mul;
    },
    increaseCurrScoreBy(state, { payload }: PayloadAction<number>) {
      state.currScore += payload * state.level * state.mul;
    },
    addCurrScoreToList(state, { payload }: PayloadAction<string>) {
      const newScoreList = state.scoreList.slice();
      newScoreList.push({ score: state.currScore, date: payload });
      newScoreList.sort((a, b) => b.score - a.score);
      newScoreList.slice(0, 15);

      state.scoreList = newScoreList;
    },
    setMul(state, { payload }: PayloadAction<number>) {
      state.mul = payload;
    },
  },
});

export default scoreSlice.reducer;
export const {
  setScoreList,
  setLevel,
  resetCurrScore,
  increaseCurrScore,
  increaseCurrScoreBy,
  addCurrScoreToList,
  setMul,
} = scoreSlice.actions;
