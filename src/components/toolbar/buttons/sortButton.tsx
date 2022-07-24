import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Column } from '../../../common';
import { AlgorithmAction, State } from '../../../redux';
import { sort } from '../../../redux/slices/columnSlice';

interface Props {
  name: string;
  sortCallback: (columns: Column[]) => AlgorithmAction[]
}

function SortButtons({ name, sortCallback }: Props) {
  const dispatch = useDispatch();

  const columns = useSelector((state: State) => state.columns.columns);
  const disabled = useSelector((state: State) => state.toolbar.disabled);
  const speed = useSelector((state: State) => state.toolbar.speed);

  const onSort = useCallback(() => {
    const actions = sortCallback(columns);
    dispatch(sort(actions));
  }, [columns, dispatch, speed, sortCallback]);

  return (
    <button disabled={disabled} onClick={onSort} type="button">
      {name}
    </button>
  );
}

export default SortButtons;
