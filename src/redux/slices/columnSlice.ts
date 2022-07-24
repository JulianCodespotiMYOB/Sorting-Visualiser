import {
  createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { State } from '..';
import { Column } from '../../common';
import algorithmActionReducer, { AlgorithmAction } from '../algorithmActionReducer';
import { cancelled, enableButtons, uncancelled } from './toolbarSlice';

export interface ColumnState {
  columns: Column[];
  width: number;
  margin: number;
}

const initialState: ColumnState = {
  columns: [],
  width: 20,
  margin: 10,
};

export const columnSlice = createSlice({
  name: 'column',
  initialState,
  reducers: {
    setRandomColumns: (state: ColumnState) => {
      const columns = [];
      const randomAmount = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
      state.width = 400 / randomAmount;
      state.margin = 200 / randomAmount;
      for (let i = 0; i < randomAmount; i += 1) {
        const height = Math.floor(Math.random() * (500 - 50 + 1)) + 50;
        const colour = '#80bced';
        const id = i;
        columns.push({
          width: state.width, height, colour, id,
        });
      }
      state.columns = columns;
    },
    setColumnAmount: (state: ColumnState, { payload }: PayloadAction<any>) => {
      const columns = [];
      state.width = 400 / payload;
      state.margin = 200 / payload;
      for (let i = 0; i < payload; i += 1) {
        const height = Math.floor(Math.random() * (500 - 50 + 1)) + 50;
        const colour = '#80bced';
        const id = i;
        columns.push({
          width: state.width, height, colour, id,
        });
      }

      state.columns = columns;
    },
    swapColumns: (state: ColumnState, { payload }: PayloadAction<any>) => {
      const { columns } = state;
      const temp = columns[payload.index1];
      columns[payload.index1] = columns[payload.index2];
      columns[payload.index2] = temp;
      state.columns = columns;
    },
    bringColumnToFront: (state: ColumnState, { payload }: PayloadAction<any>) => {
      const { columns } = state;
      const temp = columns[payload.index];
      for (let i = payload.index; i > 0; i -= 1) {
        columns[i] = columns[i - 1];
      }
      columns[0] = temp;
      state.columns = columns;
    },
    colourSelectedColumns: (state: ColumnState, { payload }: PayloadAction<any>) => {
      const { columns } = state;
      for (let i = 0; i < payload.indexesToColour.length; i += 1) {
        columns[payload.indexesToColour[i]].colour = payload.colour;
      }
      state.columns = columns;
    },
    resetColumnColours: (state: ColumnState) => {
      const { columns } = state;
      columns.forEach((column: Column) => {
        column.colour = '#80bced';
      });
      state.columns = columns;
    },
    resetColumnColoursExcept: (state: ColumnState, { payload }: PayloadAction<any>) => {
      const { columns } = state;
      const exceptionColumnIndexes = payload.index;
      for (let i = 0; i < columns.length; i += 1) {
        if (!exceptionColumnIndexes.includes(i)) {
          columns[i].colour = '#80bced';
        }
      }
      state.columns = columns;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    sort: (state: ColumnState, { payload }: PayloadAction<AlgorithmAction[]>) => {

    },
  },
});

export const {
  setRandomColumns, setColumnAmount, swapColumns, colourSelectedColumns, resetColumnColours, resetColumnColoursExcept, bringColumnToFront, sort,
} = columnSlice.actions;

export const sortListener = {
  actionCreator: sort,
  effect: async (actions: any, listener: any) => {
    try {
      const task = listener.fork(async () => {
        actions.payload.forEach(async (action: any) => {
          const state = listener.getState() as State;
          await listener.delay(20000 / state.toolbar.speed);
          await algorithmActionReducer(listener.dispatch, action);
        });
      });

      await listener.condition(cancelled.match);
      task.cancel();
      // eslint-disable-next-line no-empty
    } catch { } finally {
      listener.dispatch(uncancelled());
      listener.dispatch(enableButtons());
    }
  },
};

export default columnSlice.reducer;
