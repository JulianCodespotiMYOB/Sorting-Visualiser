import { ColumnState } from './slices/columnSlice';
import { ToolbarState } from './slices/toolbarSlice';

export type { AlgorithmAction } from './algorithmActionReducer';
export { toolbarSlice } from './slices/toolbarSlice';
export { columnSlice } from './slices/columnSlice';

export interface State {
    toolbar: ToolbarState;
    columns: ColumnState;
}
