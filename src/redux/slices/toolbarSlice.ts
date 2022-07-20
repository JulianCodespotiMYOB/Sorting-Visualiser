import {
  createSlice,
} from '@reduxjs/toolkit';

interface State {
  disabled: boolean;
  speed: number | number[]
}

const initialState: State = {
  disabled: false,
  speed: 100,
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
    setSpeed: (state: State, action: { payload: number | number[] }) => {
      state.speed = action.payload;
    },
  },
});

export const { disableButtons, enableButtons, setSpeed } = toolbarSlice.actions;

export default toolbarSlice.reducer;
