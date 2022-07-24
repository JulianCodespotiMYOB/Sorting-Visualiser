import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../redux';
import { cancelled } from '../../../redux/slices/toolbarSlice';

function CancelButton() {
  const dispatch = useDispatch();

  const disabled = useSelector((state: State) => state.toolbar.disabled);

  const onButtonClick = useCallback(() => {
    dispatch(cancelled());
  }, [dispatch]);

  return (
    <button disabled={!disabled} onClick={onButtonClick} type="button">
      Cancel
    </button>
  );
}

export default CancelButton;
