import {
  createSlice,
} from '@reduxjs/toolkit';

const initialState = {
  disabled: false,
};

export const toolbarSlice = createSlice({
  name: 'toolbar',
  initialState,
  reducers: {
    disableButtons: (state: any) => {
      state.disabled = true;
    },
    enableButtons: (state: any) => {
      state.disabled = false;
    },
  },
});

export const { disableButtons, enableButtons } = toolbarSlice.actions;

export default toolbarSlice.reducer;
