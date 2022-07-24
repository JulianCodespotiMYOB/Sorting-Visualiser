import {
  configureStore, ThunkAction, Action, createListenerMiddleware,
} from '@reduxjs/toolkit';
import columnReducer, { sortListener } from './slices/columnSlice';
import toolbarReducer, { cancelled } from './slices/toolbarSlice';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening(sortListener);
listenerMiddleware.startListening({
  actionCreator: cancelled,
  effect: async () => {
    listenerMiddleware.stopListening({ ...sortListener, cancelActive: true });
    listenerMiddleware.startListening(sortListener);
  },
});

export const store = configureStore({
  reducer: {
    columns: columnReducer,
    toolbar: toolbarReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).prepend(listenerMiddleware.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
