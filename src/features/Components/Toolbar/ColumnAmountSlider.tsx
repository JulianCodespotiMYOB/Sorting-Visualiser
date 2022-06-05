import Slider from '@mui/material/Slider';
import { AnyListenerPredicate } from '@reduxjs/toolkit/dist/listenerMiddleware/types';
import { useDispatch } from 'react-redux';
import { setColumnAmount } from '../../Slices/columnSlice';

function ColumnAmountSlider(props: any) {
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
        size={'small'}
        disabled={props.disabled}
        />
    );
}

export default ColumnAmountSlider;