import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import ColumnGrapic from '../column/column';
import Platform from './platform';
import { State } from '../../../redux';
import { Column } from '../../../common';

function ColumnsOnPlatform() {
  const columns = useSelector((state: State) => state.columns.columns);
  const width = useSelector((state: State) => state.columns.width);
  const margin = useSelector((state: State) => state.columns.margin);

  const platformWidth = width * columns.length + margin * (columns.length - 1);
  const marginStyle = () => ({
    marginRight: `${margin}px`,
  });

  const previousColumns = useRef<Column[]>();
  useEffect(() => {
    previousColumns.current = columns;
  }, [columns]);

  return (
    <div className="ColumnsOnPlatform">
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>
        {columns.map((column) => (
          <div style={marginStyle()}>
            <ColumnGrapic width={width} height={column.height} colour={column.colour} />
          </div>
        ))}
      </div>
      <Platform width={platformWidth} height={20} />
    </div>
  );
}

export default ColumnsOnPlatform;
