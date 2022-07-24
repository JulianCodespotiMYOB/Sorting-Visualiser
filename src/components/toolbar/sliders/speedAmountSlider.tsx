import Slider from '@mui/material/Slider';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../redux';
import { setSpeed } from '../../../redux/slices/toolbarSlice';

function SpeedAmountSlider() {
  const dispatch = useDispatch();

  const disabled = useSelector((state: State) => state.toolbar.disabled);

  const onChangeCommitted = useCallback((event: any, value: number | number[]) => {
    let speed = value as number;

    if (Array.isArray(value)) {
      speed = value?.[0] ?? 0;
    }

    dispatch(setSpeed(speed));
  }, [dispatch]);

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
        onChangeCommitted={onChangeCommitted}
        size="medium"
        disabled={disabled}
      />
    </div>
  );
}

export default SpeedAmountSlider;
