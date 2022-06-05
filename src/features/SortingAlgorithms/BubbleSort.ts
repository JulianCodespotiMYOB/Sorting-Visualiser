import { sleep } from '../Common/sleep';
import { colourSelectedColumns, Column, swapColumns } from '../Slices/columnSlice';
import { enableButtons } from '../Slices/toolbarSlice';

function BubbleSort (columns: Column[], dispatch: any) {
	let unsorted = true;
	let amountOfColumns = columns.length;
	let localColumnState = [...columns]
	let actionsToDispatch = [];
	let swapsPerLoop = 0;
	while (unsorted) {
		for (let i = 0; i < amountOfColumns - 1; i++) {
			actionsToDispatch.push({colour: [i, i+1]});
			if (localColumnState[i].height < localColumnState[i + 1].height) {
				actionsToDispatch.push({swap:[i,i+1]});
				swapLocalColumns(localColumnState, i, i+1);
				swapsPerLoop += 1;
			}
		}
		if (swapsPerLoop === 0) {
			unsorted = false;
		}
		swapsPerLoop = 0;
	}
	handleDispatch(dispatch, actionsToDispatch);
};

function swapLocalColumns(localColumnState: Column[], i: number, j: number) {
	let temp = localColumnState[i];
	localColumnState[i] = localColumnState[j];
	localColumnState[j] = temp;
}

async function handleDispatch(dispatch: any, actionsToDispatch: any[]) {
	for (let i = 0; i < actionsToDispatch.length; i++) {
		await sleep(20000/actionsToDispatch.length)
		if (actionsToDispatch[i].swap) {
			dispatch(colourSelectedColumns({indexesToColour: actionsToDispatch[i].swap, colour: "green"}))
			dispatch(swapColumns({index1: actionsToDispatch[i].swap[0], index2:actionsToDispatch[i].swap[1]}));
		}
		else (
			dispatch(colourSelectedColumns({indexesToColour: actionsToDispatch[i].colour, colour: "red"}))
		)
	}
	dispatch(enableButtons());
}

export default BubbleSort;
