import { createAsyncThunk, createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../../app/store';

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
		setColumns: (state: any, { payload }: PayloadAction<any>) => {
			let columns = [];
			let randomAmount = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
			state.width = 400 / randomAmount;
			state.margin = 200 / randomAmount;
			for (let i = 0; i < randomAmount; i++) {
				columns.push({ width: state.width, height: Math.floor(Math.random() * (500 - 50 + 1)) + 50, colour: '#80bced' });
			}
			state.columns = columns;
		},
		setColumnAmount: (state: any, { payload }: PayloadAction<any>) => {
			let columns = [];
			state.width = 400 / payload;
			state.margin = 200 / payload;
			for (let i = 0; i < payload; i++) {
				columns.push({ width: state.width, height: Math.floor(Math.random() * (500 - 50 + 1)) + 50, colour: '#80bced' });
			}

			state.columns = columns;
		},
		swapColumns: (state: any, { payload }: PayloadAction<any>) => {
			let columns = state.columns;
			let temp = columns[payload.index1];
			debugger;
			columns[payload.index1] = columns[payload.index2];
			columns[payload.index2] = temp;
			state.columns = columns;
		},
		colourSelectedColumns: (state: any, { payload }: PayloadAction<any>) => {
			let columns = state.columns;
			columns.map((column: Column) => {
				column.colour = '#80bced';
			});
      debugger;
			for (let i = 0; i < payload.indexesToColour.length; i++) {
				columns[payload.indexesToColour[i]].colour = payload.colour;
			}
			state.columns = columns;
		},
	},
});

export const { setColumns, setColumnAmount, swapColumns, colourSelectedColumns } = columnSlice.actions;

export default columnSlice.reducer;
