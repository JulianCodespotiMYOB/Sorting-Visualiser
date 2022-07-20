import { useDispatch, useSelector } from 'react-redux';
import ColumnAmountSlider from './ColumnAmountSlider';
import RandomizeButton from './RandomizeButton';
import SortButtons from './SortButtons';

function Toolbar() {
  const dispatch = useDispatch();
  const columns = useSelector((state: any) => state.columns.columns);
  const disabled = useSelector((state: any) => state.toolbar.disabled);

  return (
    <div className="Toolbar">
      <RandomizeButton dispatch={dispatch} disabled={disabled} columns={columns} />
      <SortButtons dispatch={dispatch} columns={columns} disabled={disabled} />
      <ColumnAmountSlider disabled={disabled} />
    </div>
  );
}

export default Toolbar;
