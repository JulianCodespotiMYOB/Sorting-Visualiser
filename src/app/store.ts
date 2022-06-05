import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import columnReducer from '../features/counter/Slices/columnSlice';
import toolbarReducer from '../features/counter/Slices/toolbarSlice';

export const store = configureStore({
  reducer: {
    columns: columnReducer,
    toolbar: toolbarReducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
