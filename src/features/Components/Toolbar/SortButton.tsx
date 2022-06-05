import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { AnyMap } from 'immer/dist/internal';
import { Column, setColumns } from '../../Slices/columnSlice';
import { disableButtons, enableButtons } from '../../Slices/toolbarSlice';
import BubbleSort from '../../SortingAlgorithms/BubbleSort';

function SortButton(props: any) {
	return (
		<button disabled={props.disabled} onClick={() => handleOnClick(props.dispatch, props.columns)}>
			Bubble Sort
		</button>
	);
}

function handleOnClick(dispatch: any, columns: Column[]) {
    debugger;
    dispatch(disableButtons())
	BubbleSort(columns, dispatch);
}

export default SortButton;
