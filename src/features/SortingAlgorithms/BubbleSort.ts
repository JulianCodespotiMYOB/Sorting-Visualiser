import { Column } from '../Slices/columnSlice';
import { handleDispatch, swapArrayValues } from './AlgorithmHelper';

function BubbleSort(columns: Column[], dispatch: any) {
  let unsorted = true;
  const amountOfColumns = columns.length;
  const localColumnState = [...columns];
  const actionsToDispatch = [];
  let swapsPerLoop = 0;
  while (unsorted) {
    for (let i = 0; i < amountOfColumns - 1; i += 1) {
      actionsToDispatch.push({ reset: true });
      actionsToDispatch.push({ selectColumns: [i, i + 1] });
      if (localColumnState[i].height < localColumnState[i + 1].height) {
        actionsToDispatch.push({ swap: [i, i + 1] });
        swapArrayValues(localColumnState, i, i + 1);
        swapsPerLoop += 1;
      }
    }
    if (swapsPerLoop === 0) {
      unsorted = false;
    }
    swapsPerLoop = 0;
  }
  handleDispatch(dispatch, actionsToDispatch);
}

export default BubbleSort;
