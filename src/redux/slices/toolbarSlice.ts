import {
  createSlice,
} from '@reduxjs/toolkit';

interface State {
  disabled: boolean;
}

const initialState: State = {
  disabled: false,
};

export const toolbarSlice = createSlice({
  name: 'toolbar',
  initialState,
  reducers: {
    disableButtons: (state: State) => {
      state.disabled = true;
    },
    enableButtons: (state: State) => {
      state.disabled = false;
    },
  },
});

export const { disableButtons, enableButtons } = toolbarSlice.actions;

export default toolbarSlice.reducer;
