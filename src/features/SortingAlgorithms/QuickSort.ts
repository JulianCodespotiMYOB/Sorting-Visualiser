import { Column } from '../Slices/columnSlice';
import handleDispatch from './AlgorithmActionReducer';
import { swapArrayValues } from './AlgorithmHelper';

function partition(arr: Column[], start: number, end: number, actionsToDispatch: any[]) {
  const pivotValue = arr[end].height;
  let pivotIndex = start;
  for (let i = start; i < end; i += 1) {
    actionsToDispatch.push({ type: 'resetExcept', payload: [end, pivotIndex] });
    actionsToDispatch.push({ type: 'select', payload: { indexes: [i], colour: 'red' } });
    actionsToDispatch.push({ type: 'select', payload: { indexes: [pivotIndex, end], colour: 'pink' } });
    if (arr[i].height < pivotValue) {
      if (i !== pivotIndex) {
        actionsToDispatch.push({ type: 'swap', payload: [i, pivotIndex] });
      }
      swapArrayValues(arr, i, pivotIndex);
      pivotIndex += 1;
    }
  }
  actionsToDispatch.push({ type: 'swap', payload: [end, pivotIndex] });
  swapArrayValues(arr, pivotIndex, end);
  return pivotIndex;
}

function quickSortRecursive(localColumnState: Column[], start: number, end: number, actionsToDispatch: any[]) {
  if (start < end) {
    const pivotIndex = partition(localColumnState, start, end, actionsToDispatch);
    quickSortRecursive(localColumnState, start, pivotIndex - 1, actionsToDispatch);
    quickSortRecursive(localColumnState, pivotIndex + 1, end, actionsToDispatch);
  }
}

function QuickSort(columns: Column[], dispatch: any) {
  const localColumnState = [...columns];
  const actionsToDispatch: any[] = [];
  let start = 0;
  let end = localColumnState.length - 1;

  while (start < end) {
    const pivotIndex = partition(localColumnState, start, end, actionsToDispatch);
    quickSortRecursive(localColumnState, start, pivotIndex - 1, actionsToDispatch);
    quickSortRecursive(localColumnState, pivotIndex + 1, end, actionsToDispatch);

    start = pivotIndex + 1;
    end = pivotIndex - 1;
  }
  handleDispatch(dispatch, actionsToDispatch);
}

export default QuickSort;
