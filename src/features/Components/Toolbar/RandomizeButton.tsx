import { AnyAction } from '@reduxjs/toolkit';
import { Dispatch, useCallback } from 'react';
import { Column, setColumns } from '../../Slices/columnSlice';

interface Props {
  dispatch: Dispatch<AnyAction>;
  columns: Column[];
  disabled: boolean;
}

function RandomizeButton({ dispatch, columns, disabled }: Props) {
  const onRandomizeButtonClick = useCallback(() => {
    dispatch(setColumns());
  }, [columns, dispatch]);

  return (
    <button disabled={disabled} onClick={onRandomizeButtonClick} type="button">
      Randomize
    </button>
  );
}

export default RandomizeButton;
