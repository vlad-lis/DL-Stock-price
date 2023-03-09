function Predictions({ isOpen, predictions }) {
    return (
        <div className={`predictions ${isOpen && 'predictions_open'}`}>
            <div className='predictions__content'>
                <div className='predictions__prediction' id='combined'>
                    <p className='predictions__model-name' id='name-combined'>Overall probability:</p>
                    <p className='predictions__probability'>{`${predictions.combined}%`}</p>
                </div>
                <div className='predictions__separate-models'>
                    <div className='predictions__prediction'>
                        <p className='predictions__model-name'>Inside school:</p>
                        <p className='predictions__probability'>{`${predictions.inside}%`}</p>
                    </div>
                    <div className='predictions__prediction'>
                        <p className='predictions__model-name'>Outside school:</p>
                        <p className='predictions__probability'>{`${predictions.outside}%`}</p>
                    </div>
                    <div className='predictions__prediction'>
                        <p className='predictions__model-name'>Cyberbullying:</p>
                        <p className='predictions__probability'>{`${predictions.cyber}%`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Predictions;