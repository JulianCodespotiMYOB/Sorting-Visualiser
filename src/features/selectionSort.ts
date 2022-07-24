import { Column } from '../common';
import { AlgorithmAction } from '../redux/algorithmActionReducer';
import { bringToFront } from './utilities/algorithmHelper';

function SelectionSort(columns: Column[]): AlgorithmAction[] {
  const amountOfColumns = columns.length;
  const localColumnState = [...columns];
  const actionsToDispatch = [] as AlgorithmAction[];

  let smallestIndex = 0;
  let currentSmallestIndex = 0;
  let sorts = 0;
  let unsorted = true;

  actionsToDispatch.push({ type: 'start', payload: { } });

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
  }

  actionsToDispatch.push({ type: 'done', payload: {} });
  return actionsToDispatch;
}

export default SelectionSort;
