import {
  createSlice,
} from '@reduxjs/toolkit';

export interface ToolbarState {
  disabled: boolean;
  speed: number
  cancelled: boolean;
}

const initialState: ToolbarState = {
  disabled: false,
  cancelled: false,
  speed: 100,
};

export const toolbarSlice = createSlice({
  name: 'toolbar',
  initialState,
  reducers: {
    disableButtons: (state: ToolbarState) => {
      state.disabled = true;
    },
    enableButtons: (state: ToolbarState) => {
      state.disabled = false;
    },
    setSpeed: (state: ToolbarState, action: { payload: number }) => {
      state.speed = action.payload;
    },
    cancelled: (state: ToolbarState) => {
      state.cancelled = true;
    },
    uncancelled: (state: ToolbarState) => {
      state.cancelled = false;
    },
  },
});

export const {
  disableButtons, enableButtons, setSpeed, uncancelled, cancelled,
} = toolbarSlice.actions;

export default toolbarSlice.reducer;
