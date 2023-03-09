function Predictions({ isOpen, predictions }) {
    return (
        <div className={`predictions ${isOpen && 'predictions_open'}`}>
            <div>
                <p>combined:</p>
                <p>{predictions.combined}</p>
            </div>
            <div>
                <p>inside:</p>
                <p>{predictions.inside}</p>
            </div>
            <div>
                <p>outside:</p>
                <p>{predictions.outside}</p>
            </div>
            <div>
                <p>cyber:</p>
                <p>{predictions.cyber}</p>
            </div>
        </div>
    )
}

export default Predictions;