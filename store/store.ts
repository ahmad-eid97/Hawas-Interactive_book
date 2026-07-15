// REDUX STUFF
import { configureStore } from "@reduxjs/toolkit";
// REDUCERS ( SLICES )
import commonReducer from './slices/common';
import teacherReducer from './slices/teacher';

export const store = configureStore({
  reducer: {
    common: commonReducer,
    teacher: teacherReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;