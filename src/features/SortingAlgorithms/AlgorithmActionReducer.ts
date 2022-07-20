/* eslint-disable no-await-in-loop */
import sleep from '../Common/sleep';
import {
  colourSelectedColumns, resetColumnColours, resetColumnColoursExcept, swapColumns, bringColumnToFront,
} from '../Slices/columnSlice';
import { enableButtons } from '../Slices/toolbarSlice';

const algorithmActionReducer = async (dispatch: any, action: any) => {
  switch (action.type) {
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
    default:
      break;
  }
};

export async function handleDispatch(dispatch: any, actionsToDispatch: any[]) {
  for (let i = 0; i < actionsToDispatch.length; i += 1) {
    const action = actionsToDispatch[i];
    await sleep(50000 / actionsToDispatch.length);
    await algorithmActionReducer(dispatch, action);
  }
  dispatch(enableButtons());
}

export default handleDispatch;
