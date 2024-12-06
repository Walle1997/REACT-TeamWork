import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import filmsReducer from './films/slice'

export const store = configureStore({
  reducer: {
    films: filmsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
