const platformStyle = (width: number, height: number) => ({
  width: `${width}px`,
  height: `${height}px`,
  backgroundColor: 'grey',
});

function Platform(props: { width: number; height: number }) {
  const { width, height } = props;
  return (
    <div className="Platform">
      <div style={platformStyle(width, height)} />
    </div>
  );
}

export default Platform;
