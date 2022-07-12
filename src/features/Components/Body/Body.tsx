import { useSelector } from 'react-redux';
import ColumnsOnPlatform from '../ColumnsOnPlatform';

function Body() {
  const columns = useSelector((state: any) => state.columns.columns);
  const width = useSelector((state: any) => state.columns.width);
  const margin = useSelector((state: any) => state.columns.margin);

  return (
    <div className="Body">
      <ColumnsOnPlatform width={width} columns={columns} margin={margin} />
    </div>
  );
}

export default Body;
