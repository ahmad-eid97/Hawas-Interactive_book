import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type StateType = {
  questions: any;
  corrected: number;
}

const initialState: StateType = {
  questions: null,
  corrected: 0,
}

export const teacher = createSlice({
  name: 'teacherSlice',
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<boolean>) => {
      state.questions = action.payload
    },
    updateCorrected: (state) => {
      state.corrected += 1
    }
  }
});

export const {
  setQuestions,
  updateCorrected
} = teacher.actions;

export default teacher.reducer;