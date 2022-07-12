/* eslint-disable no-await-in-loop */
import sleep from '../Common/sleep';
import {
  colourSelectedColumns, Column, resetColumnColours, resetColumnColoursExcept, swapColumns,
} from '../Slices/columnSlice';
import { enableButtons } from '../Slices/toolbarSlice';

export function swapArrayValues(array: Column[], left: number, right: number) {
  const temp = array[left];
  array[left] = array[right];
  array[right] = temp;
}

export async function handleDispatch(dispatch: any, actionsToDispatch: any[]) {
  for (let i = 0; i < actionsToDispatch.length; i += 1) {
    await sleep(20000 / actionsToDispatch.length);
    if (actionsToDispatch[i].resetExcept) {
      dispatch(resetColumnColoursExcept({ index: actionsToDispatch[i].resetExcept }));
    } else if (actionsToDispatch[i].reset) {
      dispatch(resetColumnColours());
    } else if (actionsToDispatch[i].swap) {
      dispatch(colourSelectedColumns({ indexesToColour: actionsToDispatch[i].swap, colour: 'green' }));
      if (actionsToDispatch[i].swap[0] !== actionsToDispatch[i].swap[1]) {
        await sleep(500);
      }
      dispatch(swapColumns({ index1: actionsToDispatch[i].swap[0], index2: actionsToDispatch[i].swap[1] }));
    } else if (actionsToDispatch[i].selectColumns) {
      dispatch(colourSelectedColumns({ indexesToColour: actionsToDispatch[i].selectColumns, colour: 'red' }));
    }
  }
  dispatch(enableButtons());
}
