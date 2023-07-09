import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type StateType = {
  name: string
}

const initialState: StateType = {
  name: 'ahmad eid'
}

export const common = createSlice({
  name: 'commonSlice',
  initialState,
  reducers: {
    test: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    }
  }
});

export const {
  test
} = common.actions;

export default common.reducer;