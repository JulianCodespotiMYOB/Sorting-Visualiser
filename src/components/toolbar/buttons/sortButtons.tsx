import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { useCallback } from 'react';
import { Column } from '../../../common';
import { BubbleSort, QuickSort, SelectionSort } from '../../../features';
import { disableButtons } from '../../../redux/slices/toolbarSlice';

interface Props {
  dispatch: Dispatch<AnyAction>;
  columns: Column[];
  disabled: boolean;
  dispatchSpeed: number
}

function SortButtons({
  dispatch, columns, disabled, dispatchSpeed,
}: Props) {
  const onClickBubblesort = useCallback(() => {
    dispatch(disableButtons());
    BubbleSort(columns, dispatch, dispatchSpeed);
  }, [columns, dispatch]);

  const onClickQuicksort = useCallback(() => {
    dispatch(disableButtons());
    QuickSort(columns, dispatch, dispatchSpeed);
  }, [columns, dispatch]);

  const onClickSelectionSort = useCallback(() => {
    dispatch(disableButtons());
    SelectionSort(columns, dispatch, dispatchSpeed);
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
