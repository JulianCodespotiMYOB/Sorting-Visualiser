import { AnyMap } from 'immer/dist/internal';
import { setColumns } from '../../Slices/columnSlice';

function RandomizeButton(props: any) {
	return (
		<button
            disabled={props.disabled}
			onClick={() => props.dispatch(setColumns(10))}
		>
			Randomize
		</button>
	);
}

export default RandomizeButton;
