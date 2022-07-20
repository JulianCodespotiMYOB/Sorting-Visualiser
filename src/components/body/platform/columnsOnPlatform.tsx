import { Column } from '../../../common';
import ColumnGrapic from '../column/column';
import Platform from './platform';

function ColumnsOnPlatform(props: { width: number; columns: Column[]; margin: number }) {
  const { width, columns, margin } = props;
  const platformWidth = width * columns.length + margin * (columns.length - 1);
  const marginStyle = () => ({
    marginRight: `${margin}px`,
  });

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