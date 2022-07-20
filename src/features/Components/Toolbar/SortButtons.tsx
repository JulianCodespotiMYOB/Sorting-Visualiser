import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { useCallback } from 'react';
import { Column } from '../../Slices/columnSlice';
import { disableButtons } from '../../Slices/toolbarSlice';
import BubbleSort from '../../SortingAlgorithms/BubbleSort';
import QuickSort from '../../SortingAlgorithms/QuickSort';
import SelectionSort from '../../SortingAlgorithms/SelectionSort';

interface Props {
  dispatch: Dispatch<AnyAction>;
  columns: Column[];
  disabled: boolean;
}

function SortButtons({ dispatch, columns, disabled }: Props) {
  const onClickBubblesort = useCallback(() => {
    dispatch(disableButtons());
    BubbleSort(columns, dispatch);
  }, [columns, dispatch]);

  const onClickQuicksort = useCallback(() => {
    dispatch(disableButtons());
    QuickSort(columns, dispatch);
  }, [columns, dispatch]);

  const onClickSelectionSort = useCallback(() => {
    dispatch(disableButtons());
    SelectionSort(columns, dispatch);
  }, [columns, dispatch]);

  return (
    <>
      <button disabled={disabled} onClick={onClickBubblesort} type="button">
        Bubble Sort
      </button>
      <button disabled={disabled} onClick={onClickQuicksort} type="button">
        Quick Sort
      </button>
      <button disabled={disabled} onClick={onClickSelectionSort} type="button">
        Selection Sort
      </button>
    </>
  );
}

export default SortButtons;
