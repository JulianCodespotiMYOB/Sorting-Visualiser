const columnStyle = (width: number, height: number, colour: string) => ({
  width: `${width}px`,
  height: `${height}px`,
  backgroundColor: `${colour}`,
  fontSize: `${width}px`,
});

function Column(props: { width: number; height: number; colour: string }) {
  const { width, height, colour } = props;
  return (
    <div className="Column" style={columnStyle(width, height, colour)}>
      {height.toFixed(0)}
    </div>
  );
}

export default Column;
