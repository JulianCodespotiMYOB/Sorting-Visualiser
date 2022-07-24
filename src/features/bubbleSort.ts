import { AlgorithmAction } from '../redux';
import { Column } from '../common';
import { swapArrayValues } from './utilities/algorithmHelper';

function BubbleSort(columns: Column[]): AlgorithmAction[] {
  let unsorted = true;
  let swapsPerLoop = 0;

  const amountOfColumns = columns.length;
  const localColumnState = [...columns];
  const actions = [] as AlgorithmAction[];

  actions.push({ type: 'start', payload: { } });

  while (unsorted) {
    for (let i = 0; i < amountOfColumns - 1; i += 1) {
      actions.push({ type: 'reset', payload: [] });
      actions.push({ type: 'select', payload: { indexes: [i, i + 1], colour: 'red' } });
      if (localColumnState[i].height < localColumnState[i + 1].height) {
        actions.push({ type: 'swap', payload: [i, i + 1] });
        swapArrayValues(localColumnState, i, i + 1);
        swapsPerLoop += 1;
      }
    }

    if (swapsPerLoop === 0) {
      unsorted = false;
    }

    swapsPerLoop = 0;
  }

  actions.push({ type: 'done', payload: {} });
  return actions;
}

export default BubbleSort;
