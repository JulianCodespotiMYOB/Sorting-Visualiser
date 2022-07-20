import {
  createSlice, PayloadAction,
} from '@reduxjs/toolkit';

export interface Column {
  width: number;
  height: number;
  colour: string;
}

const initialState = {
  columns: [],
  width: 20,
  margin: 10,
};

export const columnSlice = createSlice({
  name: 'column',
  initialState,
  reducers: {
    setRandomColumns: (state: any) => {
      const columns = [];
      const randomAmount = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
      state.width = 400 / randomAmount;
      state.margin = 200 / randomAmount;
      for (let i = 0; i < randomAmount; i += 1) {
        const height = Math.floor(Math.random() * (500 - 50 + 1)) + 50;
        const colour = '#80bced';
        columns.push({
          width: state.width, height, colour,
        });
      }
      state.columns = columns;
    },
    setColumnAmount: (state: any, { payload }: PayloadAction<any>) => {
      const columns = [];
      state.width = 400 / payload;
      state.margin = 200 / payload;
      for (let i = 0; i < payload; i += 1) {
        const height = Math.floor(Math.random() * (500 - 50 + 1)) + 50;
        const colour = '#80bced';
        columns.push({
          width: state.width, height, colour,
        });
      }

      state.columns = columns;
    },
    swapColumns: (state: any, { payload }: PayloadAction<any>) => {
      const { columns } = state;
      const temp = columns[payload.index1];
      columns[payload.index1] = columns[payload.index2];
      columns[payload.index2] = temp;
      state.columns = columns;
    },
    bringColumnToFront: (state: any, { payload }: PayloadAction<any>) => {
      const { columns } = state;
      const temp = columns[payload.index];
      for (let i = payload.index; i > 0; i -= 1) {
        columns[i] = columns[i - 1];
      }
      columns[0] = temp;
      state.columns = columns;
    },
    colourSelectedColumns: (state: any, { payload }: PayloadAction<any>) => {
      const { columns } = state;
      for (let i = 0; i < payload.indexesToColour.length; i += 1) {
        columns[payload.indexesToColour[i]].colour = payload.colour;
      }
      state.columns = columns;
    },
    resetColumnColours: (state: any) => {
      const { columns } = state;
      columns.forEach((column: Column) => {
        column.colour = '#80bced';
      });
      state.columns = columns;
    },
    resetColumnColoursExcept: (state: any, { payload }: PayloadAction<any>) => {
      const { columns } = state;
      const exceptionColumnIndexes = payload.index;
      for (let i = 0; i < columns.length; i += 1) {
        if (!exceptionColumnIndexes.includes(i)) {
          columns[i].colour = '#80bced';
        }
      }
      state.columns = columns;
    },
  },
});

export const {
  setRandomColumns, setColumnAmount, swapColumns, colourSelectedColumns, resetColumnColours, resetColumnColoursExcept, bringColumnToFront,
} = columnSlice.actions;

export default columnSlice.reducer;
