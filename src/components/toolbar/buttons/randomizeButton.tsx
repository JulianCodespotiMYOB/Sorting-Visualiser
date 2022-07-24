import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../redux';
import { setRandomColumns } from '../../../redux/slices/columnSlice';

function RandomizeButton() {
  const dispatch = useDispatch();

  const columns = useSelector((state: State) => state.columns.columns);
  const disabled = useSelector((state: State) => state.toolbar.disabled);

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
