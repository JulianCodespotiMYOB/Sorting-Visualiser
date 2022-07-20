import Slider from '@mui/material/Slider';
import { useDispatch } from 'react-redux';
import { setColumnAmount } from '../../../redux/slices/columnSlice';

function ColumnAmountSlider(props: any) {
  const { disabled } = props;
  const dispatch = useDispatch();
  return (
    <Slider
      defaultValue={10}
      aria-labelledby="discrete-slider"
      valueLabelDisplay="auto"
      step={1}
      marks
      min={10}
      max={50}
      onChangeCommitted={(event, value) => dispatch(setColumnAmount(value))}
      size="small"
      disabled={disabled}
    />
  );
}

export default ColumnAmountSlider;
