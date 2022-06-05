import { Dispatch, AnyAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { setColumns, swapColumns } from '../../Slices/columnSlice';
import BubbleSort from '../../SortingAlgorithms/BubbleSort';
import ColumnAmountSlider from './ColumnAmountSlider';
import RandomizeButton from './RandomizeButton';
import SortButton from './SortButton';

function Toolbar() {
	const dispatch = useDispatch();
	const columns = useSelector((state: any) => state.columns.columns);
	const disabled = useSelector((state: any) => state.toolbar.disabled);

	return (
		<div className='Toolbar'>
			<RandomizeButton dispatch={dispatch} disabled = {disabled}/>
			<SortButton dispatch={dispatch} columns = {columns} disabled = {disabled}/>
			<ColumnAmountSlider disabled={disabled} />
		</div>
	);
}

export default Toolbar;

