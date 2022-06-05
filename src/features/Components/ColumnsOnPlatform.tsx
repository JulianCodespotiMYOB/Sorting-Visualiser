import ColumnGraphic from './Column';
import { Column } from '../Slices/columnSlice';

import Platform from './Platform';
import { useDispatch } from 'react-redux';

function ColumnsOnPlatform(props: { width: number; columns: Column[]; margin: number }) {
	const platformWidth = props.width * props.columns.length + props.margin * (props.columns.length - 1);
	const dispatch = useDispatch();

	return (
		<div className='ColumnsOnPlatform'>
			<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>
				{props.columns.map((column, index) => {
					return (
						<div style={marginStyle(props.margin)}>
							<ColumnGraphic key={index} width={props.width} height={column.height} colour={column.colour} />
						</div>
					);
				})}
			</div>
			<Platform width={platformWidth} height={20} />
		</div>
	);
}

const marginStyle = (margin: number) => ({
	marginRight: `${margin}px`,
});

export default ColumnsOnPlatform;
