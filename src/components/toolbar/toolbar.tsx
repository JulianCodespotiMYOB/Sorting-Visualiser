import { useDispatch, useSelector } from 'react-redux';
import RandomizeButton from './buttons/randomizeButton';
import SortButtons from './buttons/sortButtons';
import ColumnAmountSlider from './sliders/columnAmountSlider';
import SpeedAmountSlider from './sliders/speedAmountSlider';

function Toolbar() {
  const dispatch = useDispatch();
  const columns = useSelector((state: any) => state.columns.columns);
  const disabled = useSelector((state: any) => state.toolbar.disabled);
  const dispatchSpeed = useSelector((state: any) => state.toolbar.speed);

  return (
    <div className="Toolbar">
      <RandomizeButton dispatch={dispatch} disabled={disabled} columns={columns} />
      <SortButtons dispatch={dispatch} columns={columns} disabled={disabled} dispatchSpeed={dispatchSpeed} />
      <div className="Sliders">
        <ColumnAmountSlider disabled={disabled} />
        <SpeedAmountSlider disabled={disabled} />
      </div>
    </div>
  );
}

export default Toolbar;
