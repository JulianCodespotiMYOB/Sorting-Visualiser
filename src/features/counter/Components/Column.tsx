function Column(props: { width: number, height: number, colour: string}) {
    return (
        <div className="Column" style={columnStyle(props.width, props.height, props.colour)}>
                {props.height.toFixed(0)}
        </div>
    )
}

const columnStyle = (width: number, height: number, colour: string) => ({
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: `${colour}`,
    fontSize: `${width}px`,
})

export default Column;