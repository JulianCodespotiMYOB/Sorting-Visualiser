import { BubbleSort, QuickSort, SelectionSort } from '../../features';
import CancelButton from './buttons/cancelButton';
import RandomizeButton from './buttons/randomizeButton';
import SortButton from './buttons/sortButton';
import ColumnAmountSlider from './sliders/columnAmountSlider';
import SpeedAmountSlider from './sliders/speedAmountSlider';

function Toolbar() {
  return (
    <div className="Toolbar">
      <RandomizeButton />
      <SortButton sortCallback={BubbleSort} name="Bubble Sort" />
      <SortButton sortCallback={QuickSort} name="Quick Sort" />
      <SortButton sortCallback={SelectionSort} name="Selection Sort" />
      <CancelButton />
      <div className="Sliders">
        <ColumnAmountSlider />
        <SpeedAmountSlider />
      </div>
    </div>
  );
}

export default Toolbar;
