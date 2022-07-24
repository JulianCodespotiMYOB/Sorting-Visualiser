import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../redux';
import { setColumnAmount } from '../../../redux/slices/columnSlice';

function ColumnAmountSlider() {
  const dispatch = useDispatch();

  const disabled = useSelector((state: State) => state.toolbar.disabled);

  return (
    <div style={{ margin: 100 }}>
      <h3>Amount of Columns</h3>
      <Slider
        defaultValue={20}
        aria-label="Default"
        valueLabelDisplay="auto"
        step={1}
        min={10}
        max={50}
        onChangeCommitted={(event, value) => dispatch(setColumnAmount(value))}
        size="medium"
        disabled={disabled}
      />
    </div>
  );
}

export default ColumnAmountSlider;
