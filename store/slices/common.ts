import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type StateType = {
  correctAnswer: boolean,
  wrongAnswer: boolean,
}

const initialState: StateType = {
  correctAnswer: false,
  wrongAnswer: false,
}

export const common = createSlice({
  name: 'commonSlice',
  initialState,
  reducers: {
    checkAnswer: (state, action: PayloadAction<boolean>) => {
      state.correctAnswer = action.payload
    },
    checkWrong: (state, action: PayloadAction<boolean>) => {
      state.wrongAnswer = action.payload
    }
  }
});

export const {
  checkAnswer,
  checkWrong
} = common.actions;

export default common.reducer;