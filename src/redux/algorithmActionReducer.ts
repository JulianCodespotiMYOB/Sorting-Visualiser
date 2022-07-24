import { AnyAction, Dispatch } from '@reduxjs/toolkit';
/* eslint-disable no-await-in-loop */
import sleep from '../common/sleep';
import {
  colourSelectedColumns, resetColumnColours, resetColumnColoursExcept, swapColumns, bringColumnToFront,
} from './slices/columnSlice';
import { disableButtons, enableButtons, uncancelled } from './slices/toolbarSlice';

type AlgorithmActionKey = 'swap' | 'bringToFront' | 'select' | 'reset' | 'resetExcept' | 'enableButtons' | 'done' | 'start';

export interface AlgorithmAction {
  type: AlgorithmActionKey;
  payload: any;
}

const algorithmActionReducer = async (dispatch: Dispatch<AnyAction>, action: AlgorithmAction) => {
  switch (action.type) {
    case 'start':
      dispatch(disableButtons());
      break;
    case 'swap':
      dispatch(colourSelectedColumns({ indexesToColour: action.payload, colour: 'green' }));
      dispatch(swapColumns({ index1: action.payload[0], index2: action.payload[1] }));
      await sleep(50);
      break;
    case 'bringToFront':
      dispatch(colourSelectedColumns({ indexesToColour: action.payload, colour: 'green' }));
      dispatch(bringColumnToFront({ index: action.payload }));
      await sleep(50);
      break;
    case 'select':
      dispatch(colourSelectedColumns({ indexesToColour: action.payload.indexes, colour: action.payload.colour }));
      break;
    case 'reset':
      dispatch(resetColumnColours());
      break;
    case 'resetExcept':
      dispatch(resetColumnColoursExcept({ index: action.payload }));
      break;
    case 'enableButtons':
      dispatch(enableButtons());
      break;
    case 'done':
      dispatch(enableButtons());
      dispatch(uncancelled());
      break;
    default:
      break;
  }
};

export default algorithmActionReducer;
