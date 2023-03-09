function Predictions({ predictions }) {
    return (
        <div className='predictions'>
            <p>combined:</p>
            <p>{predictions.combined}</p>
            <p>inside:</p>
            <p>{predictions.inside}</p>
            <p>outside:</p>
            <p>{predictions.outside}</p>
            <p>cyber:</p>
            <p>{predictions.cyber}</p>
        </div>

    )
}

export default Predictions;