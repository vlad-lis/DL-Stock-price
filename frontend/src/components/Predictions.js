function Predictions({ isOpen, predictions, onClose }) {
    return (
        <div className={`predictions ${isOpen && 'predictions_open'}`}>
            <div className='predictions__content'>
                <h2 className='predictions__title'>Results</h2>
                <p className='predictions__text-paragraph'>
                    &emsp;DISCLAIMER: this model was created for demonstration purposes and does not claim to provide
                    a comprehensive representation of all factors that contribute to the occurrence of bullying.
                </p>
                <p className='predictions__text-paragraph'>
                    <br/>
                    &emsp;1. "Overall probability" - combines the probabilities of
                    three possible target variables into one.<br />
                    &emsp;2. "Inside school" - the probability of the target variable
                    corresponding to the risk of being bullied inside school.<br />
                    &emsp;3. "Outside school" - the probability of the target variable
                    corresponding to the risk of being bullied outside school.<br />
                    &emsp;4. "Cyberbullying" - the probability of the target variable
                    corresponding to the risk of being cyberbullied.
                </p>
                <p className='predictions__text-paragraph'>
                    <br />
                    &emsp;Given the nature of the target variable and the high cost of false positives
                    or false negatives, it is recommended to consider predicted probabilities lower than 65-70%
                    as having a high level of uncertainty.
                </p>
                <div className='predictions__values'>
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
                    <button className='predictions__close-btn' onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Predictions;