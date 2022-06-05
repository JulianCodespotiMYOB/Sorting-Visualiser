function Platform(props : { width: number, height: number }) {

    return (
        <div className="Platform">
            <div style={platformStyle(props.width, props.height)}/>
        </div>
            
    )
}

const platformStyle = (width: number, height: number) => ({
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: 'grey',
})

export default Platform;