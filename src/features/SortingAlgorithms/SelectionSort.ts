import { Column } from '../Slices/columnSlice';
import handleDispatch from './AlgorithmActionReducer';
import { bringToFront } from './AlgorithmHelper';

function SelectionSort(columns: Column[], dispatch: any) {
  let unsorted = true;
  const amountOfColumns = columns.length;
  const localColumnState = [...columns];
  const actionsToDispatch = [];
  let smallestIndex = 0;
  let currentSmallestIndex = 0;
  let sorts = 0;
  while (unsorted) {
    for (let i = smallestIndex; i < amountOfColumns - 1; i += 1) {
      actionsToDispatch.push({ type: 'resetExcept', payload: [currentSmallestIndex] });
      actionsToDispatch.push({ type: 'select', payload: { indexes: [i], colour: 'red' } });
      actionsToDispatch.push({ type: 'select', payload: { indexes: [i], colour: 'pink' } });

      if (localColumnState[i].height < localColumnState[currentSmallestIndex].height) {
        currentSmallestIndex = i;
      }
    }

    if (sorts === amountOfColumns - 1) {
      unsorted = false;
    }

    actionsToDispatch.push({ type: 'bringToFront', payload: [currentSmallestIndex] });
    bringToFront(localColumnState, currentSmallestIndex);
    smallestIndex += 1;
    sorts += 1;
    // eslint-disable-next-line no-debugger
    debugger;
  }
  handleDispatch(dispatch, actionsToDispatch);
}

export default SelectionSort;
