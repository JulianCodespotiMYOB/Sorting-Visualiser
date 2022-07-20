import Slider from '@mui/material/Slider';
import { useDispatch } from 'react-redux';
import { setSpeed } from '../../../redux/slices/toolbarSlice';

function SpeedAmountSlider(props: any) {
  const { disabled } = props;
  const dispatch = useDispatch();
  return (
    <div style={{ margin: 100 }}>
      <h3>Sorting Speed</h3>
      <Slider
        defaultValue={20}
        aria-label="Default"
        valueLabelDisplay="auto"
        step={1}
        min={10}
        max={50000}
        onChangeCommitted={(event, value) => dispatch(setSpeed(value))}
        size="medium"
        disabled={disabled}
      />
    </div>
  );
}

export default SpeedAmountSlider;
