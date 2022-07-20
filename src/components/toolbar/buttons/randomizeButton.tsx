import { AnyAction } from '@reduxjs/toolkit';
import { Dispatch, useCallback } from 'react';
import { Column } from '../../../common';
import { setRandomColumns } from '../../../redux/slices/columnSlice';

interface Props {
  dispatch: Dispatch<AnyAction>;
  columns: Column[];
  disabled: boolean;
}

function RandomizeButton({ dispatch, columns, disabled }: Props) {
  const onRandomizeButtonClick = useCallback(() => {
    dispatch(setRandomColumns());
  }, [columns, dispatch]);

  return (
    <button disabled={disabled} onClick={onRandomizeButtonClick} type="button">
      Randomize
    </button>
  );
}

export default RandomizeButton;
