const columnStyle = (width: number, height: number, colour: string) => ({
  width: `${width}px`,
  height: `${height}px`,
  backgroundColor: `${colour}`,
  fontSize: `${width}px`,
});

interface Props {
  width: number;
  height: number;
  colour: string;
}

function Column({ width, height, colour }: Props) {
  return (
    <div className="Column" style={columnStyle(width, height, colour)}>
      {height.toFixed(0)}
    </div>
  );
}

export default Column;
