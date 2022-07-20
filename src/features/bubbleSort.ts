import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { AlgorithmAction } from '../redux';
import { Column } from '../common';
import handleDispatch from '../redux/algorithmActionReducer';
import { swapArrayValues } from './utilities/algorithmHelper';

function BubbleSort(columns: Column[], dispatch: Dispatch<AnyAction>, dispatchSpeed: number) {
  let unsorted = true;
  const amountOfColumns = columns.length;
  const localColumnState = [...columns];
  const actionsToDispatch = [] as AlgorithmAction[];
  let swapsPerLoop = 0;
  while (unsorted) {
    for (let i = 0; i < amountOfColumns - 1; i += 1) {
      actionsToDispatch.push({ type: 'reset', payload: [] });
      actionsToDispatch.push({ type: 'select', payload: { indexes: [i, i + 1], colour: 'red' } });
      if (localColumnState[i].height < localColumnState[i + 1].height) {
        actionsToDispatch.push({ type: 'swap', payload: [i, i + 1] });
        swapArrayValues(localColumnState, i, i + 1);
        swapsPerLoop += 1;
      }
    }
    if (swapsPerLoop === 0) {
      unsorted = false;
    }
    swapsPerLoop = 0;
  }
  handleDispatch(dispatch, actionsToDispatch, dispatchSpeed);
}

export default BubbleSort;
