import Slider from '@mui/material/Slider';
import { useDispatch } from 'react-redux';
import { setColumnAmount } from '../../../redux/slices/columnSlice';

function ColumnAmountSlider(props: any) {
  const { disabled } = props;
  const dispatch = useDispatch();
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
